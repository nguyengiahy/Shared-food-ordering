const btn1 = document.querySelector("#add-1")
const btn2 = document.querySelector("#add-2")
const btn3 = document.querySelector("#add-3")
const btn4 = document.querySelector("#add-4")


function display1() {
    const order2 = document.querySelector("#order-f2")
    if (order2.classList == "d-none") {
        order2.classList.remove("d-none");
    } else {
        order2.classList.add("d-none");
    }


}

function display2() {
    const order3 = document.querySelector("#order-f3")
    if (order3.classList == "d-none") {
        order3.classList.remove("d-none");
    } else {
        order3.classList.add("d-none");
    }
}

function display3() {
    const order4 = document.querySelector("#order-f4")
    if (order4.classList == "d-none") {
        order4.classList.remove("d-none");
    } else {
        order4.classList.add("d-none");
    }
}

function display4() {
    const order5 = document.querySelector("#order-f5")
    if (order5.classList == "d-none") {
        order5.classList.remove("d-none");
    } else {
        order5.classList.add("d-none");
    }
}

function validate() {
    let result = true;

    const firstname = document.querySelector("#input-Fname").value;
    const lastname = document.querySelector("#input-Lname").value;
    const address1 = document.querySelector("#input-Address-1").value;
    const address2 = document.querySelector("#input-Address-2").value;
    const suburb = document.querySelector("#input-City").value;
    const postcode = document.querySelector("#input-Pcode").value;
    const state = document.querySelector("#input-State").value;
    const phone = document.querySelector("#input-Phone").value;
    const email = document.querySelector("#input-Email").value;
    const order = document.querySelector("#input-Order").value;
    const food = document.querySelector("#input-Food").value;
    const size = document.querySelector("#input-Size").value;
    const quantity = document.querySelector("#input-Quantity").value;
    const special = document.querySelector("#input-Special").value;
    let price;
    // Order form 2 
    const food2 = document.querySelector("#input-Food-2").value;
    const size2 = document.querySelector("#input-Size-2").value;
    const quantity2 = document.querySelector("#input-Quantity-2").value;
    const special2 = document.querySelector("#input-Special-2").value;
    let price2;
    //Order form 3
    const food3 = document.querySelector("#input-Food-3").value;
    const size3 = document.querySelector("#input-Size-3").value;
    const quantity3 = document.querySelector("#input-Quantity-3").value;
    const special3 = document.querySelector("#input-Special-3").value;
    let price3;
    //Order form 4
    const food4 = document.querySelector("#input-Food-4").value;
    const size4 = document.querySelector("#input-Size-4").value;
    const quantity4 = document.querySelector("#input-Quantity-4").value;
    const special4 = document.querySelector("#input-Special-4").value;
    let price4;
    //Order form 5
    const food5 = document.querySelector("#input-Food-5").value;
    const size5 = document.querySelector("#input-Size-5").value;
    const quantity5 = document.querySelector("#input-Quantity-5").value;
    const special5 = document.querySelector("#input-Special-5").value;
    let price5;



    // First Name
    if (!firstname.match(/^[a-zA-Z]+$/)) {
        const msg = document.querySelector(".msg1");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = ' Please enter only alpha and maximum 20 character';
        result = false;
        setTimeout(() => msg.remove(), 5000);

    }

    // Last Name
    if (!lastname.match(/^[a-zA-Z]+$/)) {
        const msg = document.querySelector(".msg2");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = ' Please enter only alpha and maximum 20 character';
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }

    // Address Validate
    if (address1 == "") {
        const msg = document.querySelector(".msg3");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = ` Please enter only alpha and maximum 40 character`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }

    // Address Validate
    if (address2 == "") {
        const msg = document.querySelector(".msg3");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = ` Please enter only alpha and maximum 40 character`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }

    // Suburb Validate
    if (!suburb.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)) {
        const msg = document.querySelector(".msg4");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = ` Please enter only alpha and maximum 40 character`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }

    // state Validate
    if (state == "") {
        const msg = document.querySelector(".msg5");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = ` Please select a state`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }

    // Post code validate
    if (!postcode.match(/\d{4}/)) {
        const msg = document.querySelector(".msg6");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = `Please enter a valid post code`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    } else if ((state == "VIC") && ((postcode.toString()[0]) != 3) && ((postcode.toString()[0]) != 8)) {
        const msg = document.querySelector(".msg6");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = `Please enter a valid post code`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    } else if ((state == "NSW") && ((postcode.toString()[0]) != 1) && ((postcode.toString()[0]) != 2)) {
        const msg = document.querySelector(".msg6");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = `Please enter a valid post code`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    } else if ((state == "QLD") && ((postcode.toString()[0]) != 4) && ((postcode.toString()[0]) != 9)) {
        const msg = document.querySelector(".msg6");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = `Please enter a valid post code`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    } else if ((state == "NT") && ((postcode.toString()[0]) != 0)) {
        const msg = document.querySelector(".msg6");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = `Please enter a valid post code`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    } else if ((state == "WA") && ((postcode.toString()[0]) != 6)) {
        const msg = document.querySelector(".msg6");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = `Please enter a valid post code`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    } else if ((state == "SA") && ((postcode.toString()[0]) != 5)) {
        const msg = document.querySelector(".msg6");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = `Please enter a valid post code`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    } else if ((state == "TAS") && ((postcode.toString()[0]) != 7)) {
        const msg = document.querySelector(".msg6");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = `Please enter a valid post code`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    } else if ((state == "ACR") && ((postcode.toString()[0]) != 0)) {
        const msg = document.querySelector(".msg6");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = `Please enter a valid post code`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }

    // Email Validate
    if (!email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
        const msg = document.querySelector(".msg7");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = `Please match the email format\n`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }

    // Phone Validate
    if (phone == "") {
        const msg = document.querySelector(".msg8");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = `Please match the phone format\n`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }


    //  Food Validate
    if (food == "") {
        const msg = document.querySelector(".msg9");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = ` Please choose your meal in meal 1`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }
    // Food 2 Validate 
    if (food2 == "") {
        const msg = document.querySelector(".msg12");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = ` Please choose your meal in meal 1`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }
    // Food 3 Validate 
    if (food3 == "") {
        const msg = document.querySelector(".msg15");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = ` Please choose your meal in meal 1`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }
    // Food 4 Validate 
    if (food4 == "") {
        const msg = document.querySelector(".msg18");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = ` Please choose your meal in meal 1`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }
    // Food 5 Validate 
    if (food5 == "") {
        const msg = document.querySelector(".msg21");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = ` Please choose your meal in meal 1`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }

    //  Size Validate
    if (size == "") {
        const msg = document.querySelector(".msg10");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = ` Please specify a size in meal 1`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }

    //  Size2 Validate
    if (size2 == "") {
        const msg = document.querySelector(".msg13");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = ` Please specify a size in meal 1`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }

    //  Size3 Validate
    if (size3 == "") {
        const msg = document.querySelector(".msg16");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = ` Please specify a size in meal 1`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }

    //  Size4 Validate
    if (size4 == "") {
        const msg = document.querySelector(".msg19");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = ` Please specify a size in meal 1`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }

    //  Size5 Validate
    if (size5 == "") {
        const msg = document.querySelector(".msg22");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = ` Please specify a size in meal 1`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }

    //  Quantity Validate
    if (quantity == 0) {
        const msg = document.querySelector(".msg11");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = ` How many order do you want`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }

    //  Quantity2 Validate
    if (quantity2 == 0) {
        const msg = document.querySelector(".msg14");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = ` How many order do you want`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }

    //  Quantity3 Validate
    if (quantity3 == 0) {
        const msg = document.querySelector(".msg17");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = ` How many order do you want`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }

    //  Quantity4 Validate
    if (quantity4 == 0) {
        const msg = document.querySelector(".msg20");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = ` How many order do you want`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }

    //  Quantity5 Validate
    if (quantity5 == 0) {
        const msg = document.querySelector(".msg23");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = ` How many order do you want`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }

    price = calculatePrice(food, quantity, size, price);
    price2 = calculatePrice(food2, quantity2, size2, price2)
    price3 = calculatePrice(food3, quantity3, size3, price3)
    price4 = calculatePrice(food4, quantity4, size4, price4)
    price5 = calculatePrice(food5, quantity5, size5, price5)
    if (result) {
        alert("something");
        storeBooking(firstname, lastname, address1, address2, suburb, postcode, email, phone, state, order, price, food, size, quantity, special, food2, size2, quantity2, special2, price2, food3, size3, quantity3, special3, price3, food4, size4, quantity4, special4, price4, food5, size5, quantity5, special5, price5);
    }
    return result;
}

//  Store Order 
function storeBooking(firstname, lastname, address1, address2, suburb, postcode, email, phone, state, order, price, food, size, quantity, special, food2, size2, quantity2, special2, price2, food3, size3, quantity3, special3, price3, food4, size4, quantity4, special4, price4, food5, size5, quantity5, special5, price5) {
    localStorage.firstname = firstname;
    localStorage.lastname = lastname;
    localStorage.address1 = address1;
    localStorage.address2 = address2;
    localStorage.suburb = suburb;
    localStorage.postcode = postcode;
    localStorage.email = email;
    localStorage.phone = phone;
    localStorage.state = state;
    localStorage.order = order;
    // Store order 1
    localStorage.mealID1 = food;
    localStorage.food = food;
    localStorage.mealPrice1 = price;
    localStorage.mealSize1 = size;
    localStorage.mealQuantity1 = quantity;
    localStorage.special = special;
    // Store order 2
    localStorage.mealID2 = food2;
    localStorage.food2 = food2;
    localStorage.mealPrice2 = price2;
    localStorage.mealSize2 = size2;
    localStorage.mealQuantity2 = quantity2;
    localStorage.special2 = special2;
    // Store order 3
    localStorage.mealID3 = food3;
    localStorage.food3 = food3;
    localStorage.mealPrice3 = price3;
    localStorage.mealSize3 = size3;
    localStorage.mealQuantity3 = quantity3;
    localStorage.special3 = special3;
    // Store order 4
    localStorage.mealID4 = food4;
    localStorage.food4 = food4;
    localStorage.mealPrice4 = price4;
    localStorage.mealSize4 = size4;
    localStorage.mealQuantity4 = quantity4;
    localStorage.special4 = special4;
    // Store order 5
    localStorage.mealID5 = food5;
    localStorage.food5 = food5;
    localStorage.mealPrice5 = price5;
    localStorage.mealSize5 = size5;
    localStorage.mealQuantity5 = quantity5;
    localStorage.special5 = special5;
}

function calculatePrice(food, quantity, size, price) {
    switch (food) {
        case "pizza":
            if (size == "large") {
                price = (15 * quantity) * 2
            } else if (size == "medium") {
                price = (15 * quantity) * 1.5
            } else if (size == "small") {
                price = (15 * quantity)
            }
            break;
        case "spaghetti":
            if (size == "large") {
                price = (20 * quantity) * 2
            } else if (size == "medium") {
                price = (20 * quantity) * 1.5
            } else if (size == "small") {
                price = (20 * quantity)
            }
            case "pasta":
                if (size == "large") {
                    price = (8.5 * quantity) * 2
                } else if (size == "medium") {
                    price = (8.5 * quantity) * 1.5
                } else if (size == "small") {
                    price = (8.5 * quantity)
                }
                case "kebab":
                    if (size == "large") {
                        price = (12.5 * quantity) * 2
                    } else if (size == "medium") {
                        price = (12.5 * quantity) * 1.5
                    } else if (size == "small") {
                        price = (12.5 * quantity)
                    }
                    case "Rolls":
                        if (size == "large") {
                            price = (5.50 * quantity) * 2
                        } else if (size == "medium") {
                            price = (5.50 * quantity) * 1.5
                        } else if (size == "small") {
                            price = (5.50 * quantity)
                        }
                        default:
                            break;
    }
    return price;
}


function init() {
    btn1.onclick = display1;
    btn2.onclick = display2;
    btn3.onclick = display3;
    btn4.onclick = display4;
    const form = document.querySelector("#order-form");
    form.onsubmit = validate;
}

window.onload = init;