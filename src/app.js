import express from 'express';
import cors from 'cors';
import { produtos } from './databases';

export const app = express();

app.use(express.json());
app.use(cors());

app.get('/produtos/listar-produtos', (req, res) => {
  res.send(produtos);
});
app.get('/produtos/listar-produto/:id', (req, res) => {
  const idProduto = req.params.id;
  const atualProduto = produtos.find((produtos) => produtos.id == idProduto);
  res.send(atualProduto);
});
