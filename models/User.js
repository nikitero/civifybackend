// Archivo Character.js dentro de la carpeta models
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Creamos el esquema de personajes
const userSchema = new Schema(
  {
    name:{ type: String, required: true },
    surname:{ type: String, required: true },
    dni:{ type: String, required: false },
    age:{ type: Number },
    nationality:{ type: String, required: true },
    phoneNumber:{ type: String, required: true },
    email: { type: String, required: true },
    address: { type: String },
    picture: { type: String },
    linkedinUrl: { type: String },
    education: [
      {
        institution: { type: String },
        area: { type: String },
        startDate: { type: String },
        endDate: { type: String },
        location: { type: String },
      }
    ],
    courses: [
      {
        institution: { type: String },
        area: { type: String },
        duration: { type: String },
        location: { type: String },
      }
    ],
    jobExperience: [
      {
        company: { type: String },
        position: { type: String },
        jobDesc: { type: String },
        tools: { type: String },
        startDate: { type: String },
        endDate: { type: String },
        location: { type: String },
      }
    ]
  },
  {
    // Esta propiedad servirá para guardar las fechas de creación y actualización de los documentos
    timestamps: true,
  }
);

// Creamos y exportamos el modelo Character
const User = mongoose.model('User', userSchema);
module.exports = User;