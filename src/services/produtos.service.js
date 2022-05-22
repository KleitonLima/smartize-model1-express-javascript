import { produtos } from '../databases';

export class ProdutosServices {
  todosProdutos() {
    return produtos;
  }
  produtoPorId(id) {
    const atualProduto = produtos.find((produtos) => produtos.id == id);
    return atualProduto;
  }
  criarNovoProduto(
    tipo,
    marca,
    modelo,
    descricao,
    cor,
    condicao,
    foto,
    preco,
    garantia,
  ) {
    const novoId =
      produtos.length === 0 ? 1 : produtos[produtos.length - 1].id + 1;
    const novoProduto = {
      id: novoId,
      tipo,
      marca,
      modelo,
      descricao,
      cor,
      condicao,
      foto,
      preco,
      garantia,
    };
    produtos.push(novoProduto);
    return novoProduto;
  }
}
