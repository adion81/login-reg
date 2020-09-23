const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/login-reg",{
    useUnifiedTopology:true,
    useNewUrlParser: true

})
    .then((res) => console.log("You're now connected"))
    .catch((err) => console.log(`OH NO!!!! ${err}`))