import { produtos } from '../databases';

export class ProdutosServices {
  todosProdutos() {
    return produtos;
  }
  produtoPorId(id) {
    const atualProduto = produtos.find((produtos) => produtos.id == id);
    return atualProduto;
  }
}
