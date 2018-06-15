//Crosses out an li element to show that a user has completed the task
//If user changes their mind on whether the task is actually completed or not
//they can click the li element again to remove the line-through effect on the text.
$("ul").on("click", "li", function(){
  $(this).toggleClass("completedTask");
});

//If the user presses the trash can button, the task is removed from the todo list while doing
//a fade effect.
$("ul").on("click", "li span", function(onClick){
  $(this).parent().fadeOut('slow/600', function(){
    $(this).remove();
  });
  onClick.stopPropagation();
});

//When the user enters a new todo task, the todo list gets updated.
$("input[type='text']").on("keypress", function(event){
  if(event.which === 13){
    $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + $(this).val() + "</li>");
    $(this).val("");
  }
});


//A quality of life function which removes the placeholder text when the user wants to enter
//a task into the input field and then adds back the placeholder text when the user is no longer
//using the input field.
$("input[type='text']").on("focus", function(){
  $(this).data("placeholder", $(this).attr("placeholder"));
  $(this).attr("placeholder", "");
}).on("blur",function(){
   $(this).attr("placeholder", $(this).data("placeholder"));
});

//Function that allows the user to click the pencil button to remove and bring back the
//task input field.
$("#toggleUserTaskInput").on("click", function(){
  $("input[type='text']").fadeToggle();
});
