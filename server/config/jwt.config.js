const jwt = require("jsonwebtoken");


module.exports.authenticate = (req, res, next) => {
    // console.log(`UserToken: ${req.secret}`);
    // for(var k in req){
    //     console.log("key ",k);
    // }
    // console.log(secret);
    jwt.verify(req.cookies.usertoken, process.env.JWT_KEY, (err, payload) => {
        console.log("These are cookies",req.signedCookies);
        if (err) { 
            res.status(401).json({verified: false});
        } else {
            next();
        }
    });
}