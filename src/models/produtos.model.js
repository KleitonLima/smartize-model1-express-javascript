import { Schema, model } from 'mongoose';

const ProdutoSchema = new Schema(
  {
    tipo: { type: String, required: true },
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    descricao: { type: String, required: true },
    cor: { type: String, required: true },
    condicao: { type: String, required: true },
    foto: { type: String, required: true },
    preco: { type: Number, required: true },
    garantia: { type: String, required: true },
  },
  {
    versionKey: false,
  },
);

const Produto = model('produtos', ProdutoSchema);

export default Produto;
