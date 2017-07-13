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
  for (var i = 0; i < tempHand.length; i++) {
    if (tempHand[i] === "K" || "Q" || "J") {
      tempHand[i] = 10
    }
    if (tempHand[i] === "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9") {
      tempHand[i] = tempHand[i].charAt(1)
    }
    if (tempHand[i] === "A") {
      if (tempHand < 11) {
        tempHand[i] = 11
      }
      else {
        tempHand[i] = 1
      }
    }

  }

  // let K = 10
  // let Q = 10
  // let J = 10
  // let A = if (tempHand <=10) {
  //   return 11
  // }
  // else {
  //   return 1
  // }






  return;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
