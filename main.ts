input.onButtonPressed(Button.A, function () {
    StatusSystem = Run
    StatusDisplay = Aan
    StatusDP = Blink
})
input.onButtonPressed(Button.AB, function () {
    StatusSystem = Halt
    StatusDisplay = Aan
    StatusDP = Aan
    Minuten = 0
    seconden = 0
    ToonTijd(Minuten, seconden, StatusDP)
})
function ToonTijd (Min: number, Sec: number, Dp: number) {
    DisplayTijd = Minuten * 100 + seconden
    tm.showNumber(DisplayTijd)
    if (Dp == Blink) {
        if (DpOn == Aan) {
            DpOn = Uit
            tm.showDP(1, false)
        } else {
            DpOn = Aan
            tm.showDP(1, true)
        }
    } else {
        tm.showDP(1, true)
    }
}
input.onButtonPressed(Button.B, function () {
    StatusSystem = Run
    StatusDisplay = Hold
    StatusDP = Blink
})
let DpOn = 0
let DisplayTijd = 0
let tm: TM1637.TM1637LEDs = null
let StatusDP = 0
let StatusSystem = 0
let StatusDisplay = 0
let Minuten = 0
let seconden = 0
let Hold = 0
let Blink = 0
let Run = 0
let Halt = 0
let Uit = 0
let Aan = 0
Aan = 1
Uit = 0
Halt = 0
Run = 1
let Knipper = 1
let Stop = 0
Blink = 2
Hold = 0
seconden = 0
Minuten = 0
StatusDisplay = Hold
StatusSystem = Halt
StatusDP = Aan
tm = TM1637.create(
DigitalPin.P1,
DigitalPin.P2,
7,
4
)
tm.on()
ToonTijd(Minuten, seconden, StatusDP)
loops.everyInterval(1000, function () {
    if (StatusSystem == Run) {
        seconden += 1
        if (seconden >= 60) {
            seconden = 0
            Minuten += 1
            if (Minuten >= 60) {
                Minuten = 0
            }
        }
    }
    if (StatusDisplay == Aan) {
        ToonTijd(Minuten, seconden, StatusDP)
        if (StatusDP == Blink) {
            if (DpOn == Aan) {
                DpOn = Uit
                tm.showDP(1, false)
            } else {
                DpOn = Aan
                tm.showDP(1, true)
            }
        }
    }
    if (StatusDP == Blink) {
        if (DpOn == Aan) {
            DpOn = Uit
            tm.showDP(1, false)
        } else {
            DpOn = Aan
            tm.showDP(1, true)
        }
    }
})
