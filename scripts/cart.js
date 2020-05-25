"use strict"

function getInfo(){
	if (typeof(Storage)!=="undefined"){	
		document.getElementById("mealID1").textContent = localStorage.getItem("mealID1");
		document.getElementById("mealID2").textContent = localStorage.getItem("mealID2");
		document.getElementById("mealID3").textContent = localStorage.getItem("mealID3");
		document.getElementById("mealID4").textContent = localStorage.getItem("mealID4");
		document.getElementById("mealID5").textContent = localStorage.getItem("mealID5");

		document.getElementById("mealSize1").textContent = localStorage.getItem("mealSize1");
		document.getElementById("mealSize2").textContent = localStorage.getItem("mealSize2");
		document.getElementById("mealSize3").textContent = localStorage.getItem("mealSize3");
		document.getElementById("mealSize4").textContent = localStorage.getItem("mealSize4");
		document.getElementById("mealSize5").textContent = localStorage.getItem("mealSize5");

		document.getElementById("mealPrice1").textContent = localStorage.getItem("mealPrice1");
		document.getElementById("mealPrice2").textContent = localStorage.getItem("mealPrice2");
		document.getElementById("mealPrice3").textContent = localStorage.getItem("mealPrice3");
		document.getElementById("mealPrice4").textContent = localStorage.getItem("mealPrice4");
		document.getElementById("mealPrice5").textContent = localStorage.getItem("mealPrice5");

		document.getElementById("mealQuantity1").textContent = localStorage.getItem("mealQuantity1");
		document.getElementById("mealQuantity2").textContent = localStorage.getItem("mealQuantity2");
		document.getElementById("mealQuantity3").textContent = localStorage.getItem("mealQuantity3");
		document.getElementById("mealQuantity4").textContent = localStorage.getItem("mealQuantity4");
		document.getElementById("mealQuantity5").textContent = localStorage.getItem("mealQuantity5");

		document.getElementById("totalCost").textContent = costCalc();

	}
}

function costCalc(){
	var result = 0;
	//item 1
	if (localStorage.getItem("mealQuantity1") != "0")
		result += Number(localStorage.getItem("mealPrice1")) * Number(localStorage.getItem("mealQuantity1"));		//price * quantity

	//item 2
	if (localStorage.getItem("mealQuantity2") != "0")
		result += Number(localStorage.getItem("mealPrice2")) * Number(localStorage.getItem("mealQuantity2"));		//price * quantity

	//item 3
	if (localStorage.getItem("mealQuantity3") != "0")
		result += Number(localStorage.getItem("mealPrice3")) * Number(localStorage.getItem("mealQuantity3"));		//price * quantity

	//item 4
	if (localStorage.getItem("mealQuantity4") != "0")
		result += Number(localStorage.getItem("mealPrice4")) * Number(localStorage.getItem("mealQuantity4"));		//price * quantity

	//item 5
	if (localStorage.getItem("mealQuantity5") != "0")
		result += Number(localStorage.getItem("mealPrice5")) * Number(localStorage.getItem("mealQuantity5"));		//price * quantity

	return result;
}

function init(){
	getInfo();		//fill up the page with stored information
}

window.onload = init;