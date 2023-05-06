radio.onReceivedValue(function (name, value) {
    if ("droite" == name) {
        x = value / 4
    }
    if ("guache" == name) {
        y = value / 4
    }
})
let y = 0
let x = 0
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    . # . # .
    . # . # .
    `)
radio.setGroup(5)
basic.forever(function () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    x + y,
    SuperBit.enMotors.M3,
    x - y
    )
})
