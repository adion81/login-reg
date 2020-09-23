require('dotenv').config();

const express = require('express'),
    app = express(),
    port = 8000,
    cors = require('cors'),
    cookieParser = require('cookie-parser'),
    server = app.listen(port,() => console.log(`Listening on port ${server.address().port}`));
    
app.use(cookieParser());
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


require('./server/config/database.config');
require('./server/routes/user.routes')(app);



