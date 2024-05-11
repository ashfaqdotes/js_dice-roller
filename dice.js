// function rollDice() {
//   let dice1 = Math.floor(Math.random() * 6) + 1;
//   let dice2 = Math.floor(Math.random() * 6) + 1;
//   let total = dice1 + dice2;
//   document.getElementById("result").innerHTML = `You rolled a ${dice1} and a ${dice2} = ${total}`;
// }


function rollDice() {
  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;
  let total = dice1 + dice2;
  if (dice1 == 6 && dice2 == 6) {
    document.getElementById("winner").innerText = 'YOU WIN !!! '
  }
  document.getElementById("result").innerText = `You rolled a ${dice1} and a ${dice2} = ${total}`;
  document.getElementById("dice-image1").src = `images/dice-${dice1}.png`;
  document.getElementById("dice-image2").src = `images/dice-${dice2}.png`;
}

