const btn1 = document.querySelector("#add-1")
const btn2 = document.querySelector("#add-2")
const btn3 = document.querySelector("#add-3")
const btn4 = document.querySelector("#add-4")


function display1() {
    alert(btn1.value);
    const order2 = document.querySelector("#order-f2")
    if (btn1.value == 1 && order2.classList == "d-none") {
        order2.classList.remove("d-none");
    } else if (btn1.value == 1 && order2.classList != "d-none") {
        order2.classList.add("d-none");
    }


}

function display2() {
    const order3 = document.querySelector("#order-f3")
    if (btn2.value == 2 && order3.classList == "d-none") {
        order3.classList.remove("d-none");
    } else if (btn2.value == 2 && order3.classList != "d-none") {
        order3.classList.add("d-none");
    }
}

function display3() {
    const order4 = document.querySelector("#order-f4")
    if (btn3.value == 3 && order4.classList == "d-none") {
        order4.classList.remove("d-none");
    } else if (btn3.value == 3 && order4.classList != "d-none") {
        order4.classList.add("d-none");
    }
}

function display4() {
    const order5 = document.querySelector("#order-f5")
    if (btn4.value == 4 && order5.classList == "d-none") {
        order5.classList.remove("d-none");
    } else if (btn4.value == 4 && order5.classList != "d-none") {
        order5.classList.add("d-none");
    }
}

function validate() {
    let result = true;

    const firstname = document.querySelector("#").value;
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