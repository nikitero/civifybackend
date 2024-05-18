const express = require("express");
const User = require('./models/User');
const path = require('path');
require('dotenv').config();

//Utils
const {connect} = require('./utils/db');

//Requiring routes
const userRoutes = require('./routes/user.routes');

//Server config
const PORT = process.env.PORT || 3000;
const server = express();
const router = express.Router();

//Middlewares
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use("/", router)

// ROUTES
router.get('/', (req,res) => {
    res.send('This is my back end');
    console.log(req);
    console.log(res);
});

//Routes
server.use("/", router);
server.use('/users', userRoutes);


//Server
server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});
