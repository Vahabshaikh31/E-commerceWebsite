import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";
// import { showToast } from "./showToast";
// import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id , name ) => {
  let cartProducts = getCartProductFromLS();

  cartProducts = cartProducts.filter((curProd) => curProd.id != id);

  localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

  // //   to remove the div onclick
  let removeDiv = document.getElementById(`card${id}`);
  if (removeDiv) {
    removeDiv.remove();
    showToast("delete", name);
  }

  // // -----------------------------------------------------
  // // calculating the card total in our cartProducts page
  // // --------------------------------------------------------
  // updateCartProductTotal();

  updateCartValue(cartProducts);
};
