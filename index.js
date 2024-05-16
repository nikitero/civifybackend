const express = require("express");
const User = require('./models/User');
const path = require('path');

//Utils
const {connect} = require('./utils/db');

//Requiring routes
const userRoutes = require('./routes/user.routes');

//Server config
const PORT = 3000;
const server = express();
const router = express.Router();

// ROUTES



//Middlewares
server.use(express.json())
server.use(express.urlencoded({extended:true}))

//Routes
server.use("/", router);
//server.use('/users', userRoutes);

router.get('/',  (req,res) => {
    return User.find()
    .then(users => {
        //Returning the list of the users
        console.log(users);
        return res.status(200).json(users);
    })
    .catch(err => {
        return res.status(500).json(err);
    });
});


//Server
server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});
