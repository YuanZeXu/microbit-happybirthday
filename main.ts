input.onButtonPressed(Button.A, function () {
    radio.sendString("HBD")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("RUN")
})
radio.onReceivedString(function (receivedString) {
    music.stopAllSounds()
    if (receivedString == "HBD") {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Forever)
    } else if (receivedString == "RUN") {
        music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Forever)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Stop")
})
radio.setGroup(56)
basic.forever(function () {
    basic.showString("HAPPY BIRTHDAY TO YOU")
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
})
