var clickSubmit = $('#button');


$('ul').on("click", "li", function(e) { //Add Event Listener
	console.log("event fired");
	$(e.target).remove();
});

var adder = function() {
var blankItem = $('<li>')
$('.container').append(blankItem);
var newList = $("#foobox"); //Grabs newItem info & Assigns newList to the item added
$(blankItem).html(newList.val());
newList.val("");
newList.focus();
}

$('#button').on('click', adder);
