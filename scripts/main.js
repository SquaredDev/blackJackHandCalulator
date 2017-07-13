/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  let tempHand = hand
  let handCount = 0
  // This section defines the values of the cards.
  for (var i = 0; i < tempHand.length; i++) {
    if (tempHand[i] === "K" || tempHand[i] === "Q" || tempHand[i] === "J") {
      tempHand[i] = 10
    }
    else if (tempHand[i] == "2") {
      tempHand[i] = 2
    }
    else if (tempHand[i] == "3") {
      tempHand[i] = 3
    }
    else if (tempHand[i] == "4") {
      tempHand[i] = 4
    }
    else if (tempHand[i] == "5") {
      tempHand[i] = 5
    }
    else if (tempHand[i] == "6") {
      tempHand[i] = 6
    }
    else if (tempHand[i] == "7") {
      tempHand[i] = 7
    }
    else if (tempHand[i] == "8") {
      tempHand[i] = 8
    }
    else if (tempHand[i] == "9") {
      tempHand[i] = 9
    }
    else if (tempHand[i] === "A") {
      tempHand[i] = 11
    }
    console.log(tempHand);

    // This section calulates the hand.
    if (handCount > 21) {
      for (var k = 0; k < tempHand.length; k++) {
        if (tempHand[k] === 11) {
          tempHand[k] = 1
        }
      }
    }
    for (var j = 0; j < tempHand.length; j++) {
      handCount = handCount + tempHand[j]
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
