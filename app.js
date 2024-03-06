const squares = document.querySelectorAll(".square");
// console.log(squares)
const mole = document.querySelector(".mole");
const timeLeft = document.getElementById("time-left");
// console.log(timeLeft)
const score = document.querySelector("#score");

let result = 0;
let hitPosition;
let currentTime = 60;
let timeId = null;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomPosition = squares[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");

  hitPosition = randomPosition.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id === hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveMole() {

  timeId = setInterval(randomSquare, 500);
}

moveMole();

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0 ){
        clearInterval(countDownTimerID)
        clearInterval(timeId)
        alert(`Game over !!!! Your final score is ${result}`)
    }
}




let countDownTimerID = setInterval(countDown, 1000)