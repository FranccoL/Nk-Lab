const formatCpf = (cpf) => {
  // Remove todos os caracteres que não sejam números
  return cpf.replace(/\D/g, "");
};

module.exports = formatCpf;
