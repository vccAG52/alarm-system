radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        for (let index = 0; index < 4; index++) {
            soundExpression.soaring.playUntilDone()
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(0)
})
