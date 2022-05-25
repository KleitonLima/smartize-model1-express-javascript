export const verificarDadosProdutos = (req, res, next) => {
  const {
    tipo,
    marca,
    modelo,
    descricao,
    cor,
    condicao,
    foto,
    preco,
    garantia,
  } = req.body;

  if (
    !tipo ||
    !marca ||
    !modelo ||
    !descricao ||
    !cor ||
    !condicao ||
    !foto ||
    !preco ||
    !garantia
  ) {
    return res.status(422).send('Dados incompletos');
  }
  next();
};
