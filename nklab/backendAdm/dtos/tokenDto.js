const tokenDto = ({ tutor, animal }) => {
  return {
    animal: {
      id: animal._id,
      name: animal.name,
      idade: animal.idade,
      raca: animal.raca,
      sexo: animal.sexo,
      especie: animal.expecie,
      examPath: animal.examPath,
    },
    tutor: {
      id: tutor._id,
      name: tutor.name,
      cpf: tutor.cpf,
    },
  };
};

module.exports = tokenDto;
