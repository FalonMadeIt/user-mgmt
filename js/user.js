
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
    return("<li><span>" + info.firstName + info.lastName + info.email + "</span><button>x</button></li>");
  });

  $('.display-user').html(li);
});





// var displayUserInput = $.map(arr, fucntion (i) {
//   return
//   <div><ul> <li class="display-firstName"> ' + i.firstName  + '> </li></ul></div>
//   <div><ul> <li class="display-lastName"> ' + i.lastName  + '> </li></ul></div>
//   <div><ul> <li class="display-email"> ' + i.email  + '> </li></ul></div>
// });
//
// $(display-user).html(displayUserInput);
