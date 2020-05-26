$(document).ready(function(){
	$('.accordian h3').click(function(){
		$(this).next('.content').slideToggle();
		$(this).parent().toggleClass('active');
		$(this).parent().siblings().children('.content').slideUp();
		$(this).parent().siblings().removeClass('active');
	});
});

function displayAlert(){
	alert("Thank you! We have recieved your queries.");
}

var form = document.getElementById("form");
form.onsubmit = displayAlert;