input.onButtonPressed(Button.A, function () {
    radio.sendString("HBD")
    StopAll = 1
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("RUN")
    StopAll = 2
})
radio.onReceivedString(function (receivedString) {
    music.stopAllSounds()
    StopAll = 0
    if (receivedString == "HBD") {
        StopAll = 1
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Forever)
    } else if (receivedString == "RUN") {
        StopAll = 2
        music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Forever)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Stop")
    StopAll = 0
})
let StopAll = 0
radio.setGroup(56)
basic.forever(function () {
    basic.clearScreen()
    if (StopAll == 1) {
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
        basic.showString("HBD TO STONE")
        basic.pause(1000)
    } else if (StopAll == 2) {
        basic.showIcon(IconNames.Rollerskate)
        basic.showIcon(IconNames.Duck)
        basic.showIcon(IconNames.Giraffe)
    }
})
