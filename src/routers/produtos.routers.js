import { Router } from 'express';
import { ProdutosControllers } from '../controller/produtos.controller';

export const produtosRouters = Router();
const produtosControllers = new ProdutosControllers();

produtosRouters.get('/listar-produtos', produtosControllers.todosProdutos);
produtosRouters.get('/listar-produto/:id', produtosControllers.produtoPorId);
