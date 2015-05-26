
var arr = [];

//Storing Values of the input from users

$('form').on('submit', function (e){
  e.preventDefault();

  arr.push({
  	firstName: $('.first-name').val(),
	lastName: $('.last-name').val(),
	email: $('.email').val()
  });

  var li = arr.map(function(info){
    return("<li><span>" + info.firstName +"   " + info.lastName +"   " +  info.email +"       " + "</span><button>x</button></li>");
  });

  $('.display-user').html(li);
});
