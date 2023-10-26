let randomNumber1 = Math.trunc(Math.random() * 6 + 1);
let randomNumber2 = Math.trunc(Math.random() * 6 + 1);


let change = document.getElementsByClassName('img1')[0];
let randomLink = "./index_files/dice" + randomNumber1 + ".png";
change.setAttribute("src", randomLink)


let change2 = document.getElementsByClassName('img2')[0];
let randomLink2 = "./index_files/dice" + randomNumber2 + ".png";
change2.setAttribute("src", randomLink2)


let selectH1 = document.querySelector("h1")

if (randomNumber1 > randomNumber2) {
  selectH1.textContent = "Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
  selectH1.textContent = "Player 2 Wins!"
} else if (randomNumber1 === randomNumber2) {
  selectH1.textContent = "Draw!";
}




