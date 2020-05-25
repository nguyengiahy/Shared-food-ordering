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
    const entree = document.querySelector("#input-Entree").value;
    const food = document.querySelector("#input-Food").value;
    const size = document.querySelector("#input-Size").value;
    const quantity = document.querySelector("#input-Quantity").value;
    const special = document.querySelector("#input-Special").value;
    // Order form 2 
    const entree2 = document.querySelector("#input-Entree2").value;
    const food2 = document.querySelector("#input-Food-2").value;
    const size2 = document.querySelector("#input-Size-2").value;
    const quantity2 = document.querySelector("#input-Quantity-2").value;
    const special2 = document.querySelector("#input-Special-2").value;
    //Order form 3
    const entree3 = document.querySelector("#input-Entree3").value;
    const food3 = document.querySelector("#input-Food-3").value;
    const size3 = document.querySelector("#input-Size-3").value;
    const quantity3 = document.querySelector("#input-Quantity-3").value;
    const special3 = document.querySelector("#input-Special-3").value;
    //Order form 4
    const entree4 = document.querySelector("#input-Entree4").value;
    const food4 = document.querySelector("#input-Food-4").value;
    const size4 = document.querySelector("#input-Size-4").value;
    const quantity4 = document.querySelector("#input-Quantity-4").value;
    const special4 = document.querySelector("#input-Special-4").value;
    //Order form 5
    const entree5 = document.querySelector("#input-Entree5").value;
    const food5 = document.querySelector("#input-Food-5").value;
    const size5 = document.querySelector("#input-Size-5").value;
    const quantity5 = document.querySelector("#input-Quantity-5").value;
    const special5 = document.querySelector("#input-Special-5").value;



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
    if (!phone.match(/\d{3}\d{3}\d{4}/)) {
        const msg = document.querySelector(".msg8");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = `Please match the phone format\n`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }

    //  Entree Validate
    if (entree == "") {
        const msg = document.querySelector(".msg9");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = ` Please choose an entree in meal 1`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }

    //  Food Validate
    if (food == "") {
        const msg = document.querySelector(".msg10");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = ` Please choose your meal in meal 1`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }

    //  Size Validate
    if (size == "") {
        const msg = document.querySelector(".msg11");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = ` Please specify a size in meal 1`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }

    //  Quantity Validate
    if (quantity == 0) {
        const msg = document.querySelector(".msg12");
        msg.classList.add("text-light", "bg-warning", "my-2");
        msg.innerHTML = ` How many order do you want`
        result = false;
        setTimeout(() => msg.remove(), 5000);
    }

    if (result) {
        storeBooking(firstname, lastname, address1, address2, suburb, postcode, email, phone, state, order, entree, food, size, quantity, special);
    }
    return result;
}

//  Store Order 
function storeBooking(firstname, lastname, address1, address2, suburb, postcode, email, phone, state, order, entree, food, size, quantity, special) {
    sessionStorage.firstname = firstname;
    sessionStorage.lastname = lastname;
    sessionStorage.address1 = address1;
    sessionStorage.address2 = address2;
    sessionStorage.suburb = suburb;
    sessionStorage.postcode = postcode;
    sessionStorage.email = email;
    sessionStorage.phone = phone;
    sessionStorage.state = state;
    sessionStorage.order = order;
    sessionStorage.id = 1;
    sessionStorage.food = food;
    sessionStorage.entree1 = entree;
    sessionStorage.mealSize1 = size;
    sessionStorage.mealQuantity1 = quantity;
    sessionStorage.special = special;
    alert(sessionStorage.firstname);
    alert(sessionStorage.lastname);
    alert(sessionStorage.address1);
    alert(sessionStorage.address2);
    alert(sessionStorage.suburb);
    alert(sessionStorage.postcode);
    alert(sessionStorage.email);
    alert(sessionStorage.phone);
    alert(sessionStorage.state);
    alert(sessionStorage.order);
    alert(sessionStorage.id);
    alert(sessionStorage.food);
    alert(sessionStorage.entree1);
    alert(sessionStorage.mealSize1);
    alert(sessionStorage.mealQuantity1);
    alert(sessionStorage.special);
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