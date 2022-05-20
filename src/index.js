import express from 'express';
import cors from 'cors';
import {produtos} from './databases'

const port = 3001;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/produtos/listar-produtos', (req, res) => {
  res.send(produtos);
});
app.get('/produtos/:id', (req, res) => {
  const idProduto = req.params.id;
  const atualProduto = produtos.find((produtos) => produtos.id == idProduto);
  res.send(atualProduto);
});

app.listen(port, () => {
  console.log(`Rodando na porta http://localhost:${port}`);
});
