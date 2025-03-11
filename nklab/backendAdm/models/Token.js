const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
  tutor: { type: String, required: true },
  animal: { type: String, required: true },
  idade: { type: Number, required: true },
  raca: { type: String, required: true },
  sexo: { type: String, required: true },
  especie: { type: String, required: true },
  examPath: { type: String }, // Caminho do exame, opcional
});

module.exports = mongoose.model('Token', TokenSchema);
