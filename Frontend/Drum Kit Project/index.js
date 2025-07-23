var drums = document.querySelectorAll(".drum");

for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    makeSound(this.innerHTML);    
    buttonPress(this.innerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonPress(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("Drum Kit Project/sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("Drum Kit Project/sounds/tom-2.mp3")
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("Drum Kit Project/sounds/tom-3.mp3")
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("Drum Kit Project/sounds/tom-4.mp3")
      tom4.play();
      break;

    case "j":
      var crash = new Audio("Drum Kit Project/sounds/crash.mp3")
      crash.play();
      break;

    case "k":
      var kick = new Audio("Drum Kit Project/sounds/kick-bass.mp3")
      kick.play();
      break;

    case "l":
      var snare = new Audio("Drum Kit Project/sounds/snare.mp3")
      snare.play();
      break;

    default: console.log("bugou")
  }
}

function buttonPress(inst) {
  var trigger = document.querySelector("." + inst);

  trigger.classList.toggle("pressed");
  setTimeout(function () {
    trigger.classList.toggle("pressed");
  }, 100);

}