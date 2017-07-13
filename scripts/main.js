/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  let tempHand = []
  let handCount = 0
  // This section defines the values of the cards.
  for (var i = 0; i < hand.length; i++) {
    if (hand[i] == "K" || hand[i] == "Q" || hand[i] == "J") {
      tempHand.push(10)
    }
    else if (hand[i] == "2") {
      tempHand.push(2)
    }
    else if (hand[i] == "3") {
      tempHand.push(3)
    }
    else if (hand[i] == "4") {
      tempHand.push(4)
    }
    else if (hand[i] == "5") {
      tempHand.push(5)
    }
    else if (hand[i] == "6") {
      tempHand.push(6)
    }
    else if (hand[i] == "7") {
      tempHand.push(7)
    }
    else if (hand[i] == "8") {
      tempHand.push(8)
    }
    else if (hand[i] == "9") {
      tempHand.push(9)
    }
    else if (hand[i] == "A") {
      tempHand.push(11)
    }
  }
  //This section calulates the hand.
  console.log(tempHand);
  for (let j = 0; j < tempHand.length; j++) {
    handCount = handCount + tempHand[j]
    if (handCount >= 22 && tempHand.includes(11)) {
      console.log('The 11 rule');
    }
  }
  return handCount
}

console.log(handValue(["2", "2", "8"]));
console.log(handValue(["2", "2", "K"]));
console.log(handValue(["2", "Q"]));
console.log(handValue(["7", "J"]));
console.log(handValue(["7", "A"]));
console.log(handValue(["8", "J", "A"]));
console.log(handValue(["8", "A", "J"]));
console.log(handValue(["8", "7", "A", "A"]));
console.log(handValue(["K", "A"]));
