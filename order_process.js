"use strict";

function validation() {
    var errMsg = "";
    var Quantity = document.getElementById("Quantity").value;
    var Size = document.getElementById("Size").checked;
    

    if (Quantity < 1){
        errMsg += "Please check the quantity before adding to cart\n";
      }

    if(!Size)
    {
        errMsg += "Please pick a size before adding to cart\n";
    }

    if(errMsg != "")
    {
        alert(errMsg)
    }else
    {
     storeItemData(Quantity,Size);   
    }

}

function storeItemData(Quantity, Size)
{
    Quantity = document.getElementById("Quantity").value;
    Size = getSizeType();
    var Price = getPriceType();

    sessionStorage.Quantity = Quantity;
    sessionStorage.Size = Size;
    sessionStorage.Price = Price;
}


function cancelBooking() {
    sessionStorage.clear();
    window.location = "index.html";
}