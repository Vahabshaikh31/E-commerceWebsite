import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

export const addToCart = (event, id, stock) => {

    let arrLocalStorageProduct = getCartProductFromLS();

    const currentCardElement = document.querySelector(`#card${id}`);
    let productQuantity = currentCardElement.querySelector('.productQuantity').innerHTML;

    let price = currentCardElement.querySelector(".productPrice").innerHTML;

    price = price.replace("₹", "");

    let existingproduct = arrLocalStorageProduct.find((curProd) => curProd.id === id);

    if (existingproduct && productQuantity > 1) {
        productQuantity = Number(productQuantity) + Number(existingproduct.productQuantity) - 1;
        console.log(productQuantity);
        price = Number(price * productQuantity);
        let updatedCart = { id, productQuantity, price };

        updatedCart = arrLocalStorageProduct.map((curProd) => {
            return curProd.id === id ? updatedCart : curProd;
        });


        localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

    }
    // console.log(arrLocalStorageProduct);

    if (existingproduct) {
        return false;
    }

    price = Number(price * productQuantity);
    productQuantity = Number(productQuantity);

    let updateCart = { id, price, productQuantity };

    arrLocalStorageProduct.push(updateCart);

    localStorage.setItem('cartProductLS', JSON.stringify(arrLocalStorageProduct));

    updateCartValue(arrLocalStorageProduct);
}