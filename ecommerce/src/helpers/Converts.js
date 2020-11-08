import { Product } from "../models/product";

const convertProductsApiToProduct = (productsApi) => {
  return productsApi.map((productApi) => {
    return new Product(
      productApi.id,
      productApi.foto,
      productApi.nome,
      productApi.descricao,
      productApi.preco
    );
  });
}

export {
  convertProductsApiToProduct
}