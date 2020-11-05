input.onButtonPressed(Button.A, function () {
    choise = randint(0, 2)
    basic.showNumber(choise)
    if (choise == 0) {
        robotbit.Servo(robotbit.Servos.S1, 100)
    } else if (choise == 1) {
        robotbit.Servo(robotbit.Servos.S2, 100)
    } else if (choise == 2) {
        robotbit.Servo(robotbit.Servos.S3, 100)
    } else {
        basic.showString("Error")
    }
    basic.pause(3000)
    robotbit.Servo(robotbit.Servos.S1, 0)
    robotbit.Servo(robotbit.Servos.S2, 0)
    robotbit.Servo(robotbit.Servos.S3, 0)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
    robotbit.Servo(robotbit.Servos.S1, 0)
    robotbit.Servo(robotbit.Servos.S2, 0)
    robotbit.Servo(robotbit.Servos.S3, 0)
    basic.pause(100)
    basic.clearScreen()
})
let choise = 0
robotbit.Servo(robotbit.Servos.S1, 0)
robotbit.Servo(robotbit.Servos.S2, 0)
robotbit.Servo(robotbit.Servos.S3, 0)
basic.showIcon(IconNames.Yes)
