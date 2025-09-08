input.onButtonPressed(Button.A, function () {
    basic.showNumber(Steps)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    Steps = 0
    goal = 0
})
input.onGesture(Gesture.ThreeG, function () {
    Steps += 2
    goal += 2
})
let goal = 0
let Steps = 0
basic.showString("pedometer ZS")
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showIcon(IconNames.Heart)
}
basic.clearScreen()
basic.forever(function () {
    if (goal == 100) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            # . . . #
            . # # # .
            `)
        music.setVolume(255)
        for (let index = 0; index < 5; index++) {
            music.play(music.stringPlayable("E D G F B A C5 B ", 184), music.PlaybackMode.UntilDone)
            music.play(music.createSoundExpression(WaveShape.Square, 2450, 21, 255, 105, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        }
        goal = 0
    }
})
