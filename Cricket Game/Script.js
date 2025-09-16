let randomnumber = Math.random() * 3;
let computerChoice = ""

const bat = document.querySelector(".bat")
const ball = document.querySelector(".ball")
const stump = document.querySelector(".stump")

bat.addEventListener('click', () => {
  console.log("you hav chosen bat");
  if (randomnumber > 0 && randomnumber <= 1) {
    computerChoice = 'Bat'
  }
  else if (randomnumber > 1 && randomnumber <= 2) {
    computerChoice = 'ball'
  } else {
    computerChoice = 'stump'
  }
})