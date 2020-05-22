function cartConfirm() {
    const Name = document.querySelector(".product-name");
    const Size = document.querySelector(".product-size");
    const Price = document.querySelector(".product-price");
    const Quantity = document.querySelector(".product-quantity");
    const total = document.querySelector(".product-total");
    Name.textContent = "something";
    Size.textContent = "something";
    Price.textContent = 10;
    Price.value = 10;
    Quantity.value = 2;
    total.textContent = calcTotal(Price.value, Quantity.value);
    alert(calcTotal());

}

function checkProduct() {
    // quantities =  sessionStorage.Quantity;
    const confirm = document.querySelector("#cart-confirm");

    quantities = 5;
    for (let index = 0; index < quantities; index++) {
        confirm.innerHTML += `<tr>
        <td><span class="product-name">1</span></td>
        <td><span class="product-size">1</span></td> 
        <td><span class="product-price">1</span></td>
        <td><span class="product-quantity">1</span></td> 
        <td><span class="product-total">1</span></td> 
    </tr>`;

    }
}

function calcTotal(price, quantities) {
    let total = document.querySelector(".product-total");
    total = price * quantities;
    return total;
}

function init() {
    checkProduct();
    cartConfirm();
}
window.onload = init;