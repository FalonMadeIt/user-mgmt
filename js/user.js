
var arr = [];

$('form').on('submit', function (e){
  e.preventDefault();

  arr.push({
  	firstName: $('.first-name').val(),
	lastName: $('.last-name').val(),
	email: $('.email').val()
  });

});
