const User = require("../models/user.model"),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcrypt');

module.exports = {
    register: (req,res) => {
        const user = new User(req.body);
        user.save()
            .then( user => res.cookie("usertoken", jwt.sign({id:user._id},process.env.JWT_KEY),{httpOnly:true,expires:new Date(Date.now() + 9000000)}).json({msg:"success"}))
            .catch(err => res.status(400).json(err.errors));
    },
    login:  (req,res) => {
        User.findOne({email:req.body.email})
            .then( user => {
                if(user == null){
                    res.status(400).json({msg: "Invalid login attempt!"})
                    res.cookie()
                }
                else{
                    bcrypt.compare(req.body.password, user.password)
                        .then(isValid => {

                            if(isValid === true){
                                res
                                    .cookie(
                                        "usertoken",
                                        jwt.sign({ _id: user._id }, process.env.JWT_KEY),
                                        {
                                            httpOnly: true,
                                        }
                                    )
                                    .json({ msg: "success!" });
                            
                            }
                            else{
                                console.log('DHFKFJDKFKDH')
                                res.status(400).json({msg:"Invalid login attempt!"})
                            }
                        })
                        .catch(err => {
                            console.log(err)
                            res.status(400).json({msg:"Invalid login attempt!"})})
                }
            })
            .catch(err => res.status(400).json(err.errors));
    },
    logout: (req,res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    }
}