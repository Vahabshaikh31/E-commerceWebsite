import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event, id, stock, price) => {

  const currentCardElement = document.querySelector(`#card${id}`);
  const productproductQuantity = currentCardElement.querySelector(".productQuantity");

  const productPrice = currentCardElement.querySelector(".productPrice");

  let productQuantity = 1;
  let localStoragePrice = 0;

  let localCartProducts = getCartProductFromLS();

  let existingProd = localCartProducts.find((curProd) => curProd.id === id);

  if (existingProd) {
    productQuantity = existingProd.productQuantity;
    localStoragePrice = existingProd.price;
  } else {
    localStoragePrice = price;
    price = price;
  }

  if (event.target.className === "cartIncrement") {
    if (productQuantity < stock) {
      productQuantity += 1;
    } else if (productQuantity === stock) {
      productQuantity = stock;
      localStoragePrice = price * stock;
    }
  }

  if (event.target.className === "cartDecrement") {
    if (productQuantity > 1) {
      productQuantity -= 1;
    }
  }

  localStoragePrice = price * productQuantity;

  localStoragePrice = localStoragePrice.toFixed(2);
  let updatedCart = { id, productQuantity, price: localStoragePrice };

  updatedCart = localCartProducts.map((curProd) => {
    return curProd.id === id ? updatedCart : curProd;
  });

  console.log(updatedCart);
  productPrice.innerText = localStoragePrice;
  productproductQuantity.innerHTML = productQuantity;
  localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
  updateCartProductTotal();

};
