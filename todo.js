$(function(){
   $('.todo-form').on('submit', function (e){
     e.preventDefault();

     var txt = $('this').find('.todo-txt');

     var li = $('.todo-list').append($('<li class="todo-item"><span class="todo-label"></span><button class="todo-remove">X</button</li').text(txt.val()));

     $('.todo-list').append(li);

     txt.val('');
   });

   $('.todo-list').on('click', '.todo-remove', function (){
     $(this).closest('')
   }
});
