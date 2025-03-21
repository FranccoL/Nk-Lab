const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
  tutor: { type: mongoose.Schema.Types.ObjectId, ref: "Tutor" }, // relacionamento entre a tabela Tutor e a tabela Animal
  name: { type: String, required: true },
  idade: { type: Number, required: true },
  raca: { type: String, required: true },
  sexo: { type: String, required: true },
  especie: { type: String, required: true },
  examPath: { type: String }, // Caminho do exame, opcional
});

module.exports = mongoose.model('Animal', AnimalSchema);
