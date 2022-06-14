import express from 'express';
import cors from 'cors';
import produtosRouters from './routers/produtos.routers.js';

export const app = express();

app.use(express.json());
app.use(cors());
app.use('/produtos', produtosRouters);

export default app;
