import { getCartProductFromLS } from "./getCartProductFromLS";
const productSubTotal = document.querySelector(".productSubTotal");
export const updateCartProductTotal = ()=>{
    let localStorage = getCartProductFromLS();

    let sum =0;
    let productFinalTotal = document.querySelector(".productFinalTotal");
    for(let i=0; i<localStorage.length; i++){
        sum += parseInt(localStorage[i].price);
    }
    productSubTotal.textContent = `₹${sum}`;
    productFinalTotal.textContent = `₹${sum + 50}`;
}