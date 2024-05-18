const express = require("express");
const logError = require('./utils/log');//Gestión de errores
const User = require('./models/User');
//const logUs = require('./models/LoggedUser')
const path = require('path');
require('dotenv').config();

//Auth
//const jwt = require("jsonwebtoken");

//Utils
const {connect} = require('./utils/db')

//Requiring routes
const userRoutes = require('./routes/user.routes');
//const loggedUserRoutes = require('./routes/loggedUser.routes');

//Server config
connect();
const PORT = process.env.PORT || 3000;
const server = express();
const router = express.Router();


//Middlewares
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use("/", router)


server.get('/',(req,res)=>{
  res.send('This is my Back End')
})

//Routes
server.use("/", router);
server.use('/users', userRoutes);
//server.use('/loggedUser', loggedUserRoutes)

//Control de errores
server.use('*', (req, res, next) => {
    const msg = 'Route not found'
    const error = new Error(); 
    error.status = 404;
    next(error); 
    const log = `${msg}
    ${req.path}
    ${new Date().toISOString()}\n`;
    logError(log);
    res.status(404).send(msg);
  });



//Server
server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});