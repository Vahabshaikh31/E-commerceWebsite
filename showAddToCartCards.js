import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartValue } from "./updateCartValue";
const productTemplate = document.querySelector("#productCartTemplate");
const productContainer = document.querySelector("#productCartContainer");
import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { removeProdFromCart } from "./removeProdFromCart";

let productSubTotal = document.querySelector('.productSubTotal');

let cardProducts = getCartProductFromLS();


let productClone = products.filter((curPro) => {
    return cardProducts.some((curElem) => curPro.id === curElem.id);
})
const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");


const showCartProduct = () => {
    productClone.forEach((product) => {
        const { brand, category, description, id, image, name, price, stock } = product;

        let lsActaualdata = fetchQuantityFromCartLS(id, price);

        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector('.productPrice').textContent = lsActaualdata.price;

        productClone
            .querySelector(".remove-to-cart-button")
            .addEventListener("click", () => removeProdFromCart(id));

        productClone
            .querySelector(".stockElement")
            .addEventListener("click", (event) => {
                incrementDecrement(event, id, stock, price);
            });
            
        productClone.querySelector('.productQuantity').textContent = lsActaualdata.productQuantity;
        productContainer.append(productClone);
    });
};

showCartProduct();

let SubTotal = 0;
cardProducts.map((elem) => {
    SubTotal = SubTotal + elem.price;
})
productSubTotal.innerHTML = SubTotal.toFixed(2);
document.querySelector('.productFinalTotal').innerHTML = (SubTotal + 50).toFixed(2);

showAddToCartCards();