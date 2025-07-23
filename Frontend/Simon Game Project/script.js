var buttonColours = ["red", "green", "blue", "yellow"];
var gamePattern = [];
var playerPattern = [];
var level = 0;
var start = false;

// Start trigger
$(document).on("keydown", function(){
  if (!start) {
    nextSequence()
    $("h1").html("Level "+level);
    start = true;
  }
});

$(".btn").on("click", function() {
  var userColour = $(this).attr("id"); //event.target.id;
  console.log(playerPattern);
  
  // Add button to the sequence
  playerPattern.push(userColour);

  // Animation/sound trigger and answer check
  animation(userColour);
  makeSound(userColour);
  check(playerPattern.length-1);
});


function check(ans) {
  // Compare arrays
  if (playerPattern[ans] === gamePattern[ans]) {
    if (playerPattern.length === gamePattern.length){
      setTimeout(function() {
        nextSequence()
      }, 1000);
    }
  }  else {
    gameOver();
  }  
}

// Play sound function
function makeSound (sound) {
  var audio = new Audio("Simon Game Challenge/sounds/" + sound + ".mp3");
  audio.play();
}

// Animate function
function animation(buttonKey) {
  $("#" + buttonKey).toggleClass("pressed")
  setTimeout(function(){$("#" + buttonKey).toggleClass("pressed");}, 100);
}

// Start/next step function
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var chosenColour = buttonColours[randomNumber];
  
  playerPattern = [];
  gamePattern.push(chosenColour);
  $("#"+chosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  animation(chosenColour);
  makeSound(chosenColour);
  level++;
  $("h1").html("Level "+level);
}

  // Reset function
  function gameOver() {
    makeSound("wrong");

    $("body").toggleClass("game-over");
    setTimeout(function() {$("body").toggleClass("game-over");}, 200);

    playerPattern = [];
    gamePattern = [];
    level = 0;
    start = false;
    $("h1").html("Game Over, Press Any Key to Restart")
  }