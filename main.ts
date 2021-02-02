let hand = 0
/**
 * RPS
 * 
 * Hand
 * 
 * input to pick a number
 * 
 * number tell us which item
 * 
 * if hand = 0 -> R
 * 
 * if hand = 1 -> P
 * 
 * Else 2 -> S
 */
input.onGesture(Gesture.Shake, function () {
    hand = randint(0, 2)
    if (hand == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (hand == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
