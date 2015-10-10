//Problem: No user interaction causes no changes to applciation
//Solution: When user interacts cause changes approoiatly 

var $canvas = $("canvas");
var color = $('.selected').css("background-color");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

//When clicking oin control list items
$(".controls").on("click", "li", function(){
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked elements
  $(this).addClass("selected");
  //cache current color here
color = $(this).css("background-color");
});


//When new color is pressed
$("#revealColorSelect").click(function(){
  //Show color select or hide the color select
  changeColor();
  $("#colorSelect").toggle();
});

  //Update the "new color" span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
   $("#newColor").css("background-color", "rgb(" + r +"," + g + "," + b + ")");
}


//When color slider change
 $("input[type=range]").change(changeColor);

//When "add color" is pressed
$("#addNewColor").click(function(){
  //append the color to the controls 'ul'
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  //select the new color
  $newColor.click();
});
  

//On mouse events on the canvas
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
   //Draw lines
  if(mouseDown){
  context.beginPath();
  context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
  context.lineTo(e.offsetX, e.offsetY);
  context.strokeStyle = color;
  context.stroke();
  lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});

 

















