const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber = 0;

function askRange() {
  let min;
  let max;
  rl.question("Enter a max number: ", (num) => setMax(num));

  function setMax(num) {
    max = Number(num);
    max = num;
    rl.question("Enter a min number:", (num) => setMin(num));
  }

  function setMin(num) {
    num = Number(num);
    
    if (num < max) {
      min = num;
      console.log(`I'm thinking of a number between ${min} and ${max}...`);
      secretNumber = randomInRange(min, max);
      askGuess();
    } else {
      rl.question(`Please Enter a number less than the max (${max}):`, (num) => setMin(num));
    }
  }

}
function askGuess() {

  rl.question("Guess a number ", (userNumber) => {
    let correctGuess = checkGuess(userNumber);

    if (correctGuess) {
      console.log("You win!");
      rl.close();
    } else {
      askGuess();
    }
  });

}
function checkGuess(number) {
  if (isNaN(number)) {
    console.log("Please Enter a number.")
    return false;
  }

  number = Number(number);

  if (number < secretNumber) {
    console.log("Too low");
    return false;
  } else if (number > secretNumber) {
    console.log("Too high");
    return false;
  } else if (number === secretNumber) {
    console.log("Correct!");
    return true;
  }
}

function randomInRange(low, high) {
  let rand = low + ((high - low) * Math.random());
  return Math.round(rand);
}
askRange();
