
function rollDice() {
  list = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];
  var p1 = Math.floor(Math.random() * 6);
  var p2 = Math.floor(Math.random() * 6);
  var result = document.querySelector("h1").innerText;

  document.querySelector(".dice .img1").setAttribute("src", list[p1]);
  document.querySelector(".dice .img2").setAttribute("src", list[p2]);

  if (p1 > p2) {
    result = "Player 1 Won!";
  } else if (p1 < p2) {
    result = "Player 2 Won!";
  } else {
    result = "Draw!";
  }
}

window.onload = function() {
  var reloading = sessionStorage.getItem("reloading");
  if (reloading) {
      sessionStorage.removeItem("reloading");
      rollDice();
  }
}