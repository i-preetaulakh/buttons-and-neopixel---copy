// Function for button 2
input.onPinPressed(TouchPin.P2, function () {
    animationMode = (animationMode - 1 + 3) % 3
    basic.clearScreen()
    basic.showNumber(animationMode + 1)
})
// Function for button 1
input.onPinPressed(TouchPin.P1, function () {
    animationMode = (animationMode + 1) % 3
    basic.clearScreen()
    basic.showNumber(animationMode + 1)
})
let animationMode = 0
let huenum = 0
let strip = neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGB)
strip.setBrightness(50)
// Main animation
basic.forever(function () {
    if (animationMode == 0) {
        // 1: Rainbow
        for (let i = 0; i <= 254; i++) {
            strip.showColor(neopixel.hsl(i, 255, 50))
            basic.pause(20)
        }
    } else if (animationMode == 1) {
        // 2: Colour Change
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(500)
    } else if (animationMode == 2) {
        // 3: Pulse
        for (let j = 0; j <= 99; j++) {
            strip.setBrightness(j)
            strip.showColor(neopixel.colors(NeoPixelColors.White))
            basic.pause(10)
        }
    }
})
