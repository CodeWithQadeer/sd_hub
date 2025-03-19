let timerDisplay = document.getElementById("timerDisplay")
let timeSelect = document.getElementById("timeSelect")
let startBtn = document.getElementById("startBtn")
let pauseBtn = document.getElementById("pauseBtn")
let resetBtn = document.getElementById("resetBtn")

let countdown
let timeLeft = parseInt(timeSelect.value)

timeSelect.addEventListener("change", () => {
    timeLeft = parseInt(timeSelect.value)
    updateDisplay()
})

startBtn.addEventListener("click", () => {
    clearInterval(countdown)
    countdown = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--
            updateDisplay()
        } else {
            clearInterval(countdown)
        }
    }, 1000)
})

pauseBtn.addEventListener("click", () => {
    clearInterval(countdown)
})

resetBtn.addEventListener("click", () => {
    clearInterval(countdown)
    timeLeft = parseInt(timeSelect.value)
    updateDisplay()
})

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60).toString().padStart(2, "0")
    let seconds = (timeLeft % 60).toString().padStart(2, "0")
    timerDisplay.textContent = `${minutes}:${seconds}`
}
