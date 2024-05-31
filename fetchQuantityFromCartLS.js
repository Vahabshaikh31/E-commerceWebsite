import { getCartProductFromLS } from "./getCartProductFromLS";

export const fetchQuantityFromCartLS = (id, price) => {

  let cartProducts = getCartProductFromLS();
  
  let exstingProduct = cartProducts.find(product => product.id === id);

  let productQuantity = 1;



  if(exstingProduct){
    productQuantity = exstingProduct.productQuantity;
    price = exstingProduct.price;
  }

  return {productQuantity , price };
 
};
