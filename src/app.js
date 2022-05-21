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
  const { id } = req.params;
  const atualProduto = produtos.find((produtos) => produtos.id == id);
  if(atualProduto === undefined) {
    res.status(404).send('Paleta não encontrada')
  }
  res.send(atualProduto);
});
