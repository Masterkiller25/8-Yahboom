radio.onReceivedValue(function (name, value) {
    if ("droite" == name) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, value / 4)
    }
    if ("guache" == name) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, value / 4)
    }
})
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    . # . # .
    . # . # .
    `)
radio.setGroup(5)
