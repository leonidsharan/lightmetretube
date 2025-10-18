let level = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    level = pins.analogReadPin(AnalogPin.P0)
    // calibration formula
    level = 5000 / (level + 40)
    TM1650.showNumber(level)
    basic.pause(500)
})
