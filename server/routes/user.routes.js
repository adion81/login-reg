const LoginReg = require('../controllers/loginReg.controller');
const {authenticate} =  require('../config/jwt.config');
const UserController = require('../controllers/user.controller');

module.exports = (app) => {
    app.post('/api/register', LoginReg.register);
    app.post('/api/login',LoginReg.login);
    app.get('/api/users',authenticate,UserController.index);
}