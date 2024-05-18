const mongoose = require('mongoose');

// URL local de nuestra base de datos en mongoose y su nombre upgrade_class_3
const DB_URL = 'mongodb+srv://nikitero:Galactica21@nikitero.w9klsyr.mongodb.net/civify';

// Función que conecta nuestro servidor a la base de datos de MongoDB mediante mongoose
mongoose.connect(DB_URL, {});

module.exports = {DB_URL};