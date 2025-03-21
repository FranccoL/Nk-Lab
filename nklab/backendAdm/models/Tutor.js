const mongoose = require("mongoose");

const TutorSchema = new mongoose.Schema({
  cpf: { type: String, required: true },
  name: { type: String, required: true },
  animais: [{ type: mongoose.Schema.Types.ObjectId, ref: "Animal" }], // tutor pode ter mais de um animal
});

module.exports = mongoose.model("Tutor", TutorSchema);
