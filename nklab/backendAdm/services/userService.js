const AnimalModel = require("../models/Animal");
const TutorModel = require("../models/Tutor");
const formatCpf = require("../helpers/formatCpf");
const tokenDto = require("../dtos/tokenDto");

const userService = {
  async create({ body, idadeConvertida }) {
    const { cpf, tutor: name, animal, idade, raca, sexo, especie } = body;

    console.log(`[userService.create]: Start to save tutor and animal`);

    try {
      const newTutor = new TutorModel({
        cpf: formatCpf(cpf),
        name,
      });
      await newTutor.save();

      const newAnimal = new AnimalModel({
        tutor: newTutor._id,
        idade: idadeConvertida, // Armazenar a idade como número
        raca,
        sexo,
        especie,
        name: animal,
      });
      await newAnimal.save();

      newTutor.animais.push(newAnimal._id);
      await newTutor.save();

      console.log(
        `[userService.create]: Success to create a new Tutor and Animal`
      );
    } catch (error) {
      const errorMessage = "Error ao criar novo Tutor e Animal";
      console.error(errorMessage, error);
      throw new Error(errorMessage);
    }
  },
  async get({ token }) {
    try {
      const tutor = await TutorModel.findOne({ cpf: token });
      const animal = await AnimalModel.findOne({ tutor: tutor._id });

      const response = tokenDto({
        tutor,
        animal,
      });

      return response;
    } catch (error) {
      console.error("Erro ao buscar Animal", error);
      throw error;
    }
  },
  async update({ token, filePath }) {
    try {
      await AnimalModel.findByIdAndUpdate(
        { token },
        { examPath: filePath},
        { new: true }
      );

    } catch (error) {
      console.error("Error ao salvar anexo", error);
      throw error;
    }
  }
};

module.exports = userService;
