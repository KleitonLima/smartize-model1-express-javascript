import { Router } from 'express';
import ProdutosControllers from '../controller/produtos.controller.js';
import verificarIdProdutoMiddleware from '../middleware/verificarIdProduto.middleware.js';
import verificarDadosProdutos from '../middleware/verificarDadosProdutos.middleware.js';

const produtosRouters = Router();
const produtosControllers = new ProdutosControllers();

produtosRouters.get('/listar-produtos', ProdutosControllers.todosProdutos);
produtosRouters.get(
  '/listar-produto/:id',
  verificarIdProdutoMiddleware,
  produtosControllers.produtoPorId,
);
produtosRouters.post(
  '/criar-produto',
  verificarDadosProdutos,
  produtosControllers.criarNovoProduto,
);
produtosRouters.put(
  '/atualizar-produto/:id',
  verificarIdProdutoMiddleware,
  verificarDadosProdutos,
  produtosControllers.atualizarProduto,
);
produtosRouters.delete(
  '/deletar-produto/:id',
  verificarIdProdutoMiddleware,
  produtosControllers.deletarProduto,
);

export default produtosRouters;
