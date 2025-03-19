let lights = document.querySelectorAll(".traffic-light")

function changeLight(light, color) {
    light.querySelectorAll(".light").forEach(l => l.classList.add("opacity-20"))
    light.querySelector(`.bg-${color}-500`).classList.remove("opacity-20")
}

function runTrafficCycle(light) {
    setTimeout(() => changeLight(light, "green"), 0)
    setTimeout(() => changeLight(light, "yellow"), 4000)
    setTimeout(() => changeLight(light, "red"), 6000)
}

function startTrafficSimulation() {
    let delay = 0
    lights.forEach((light, index) => {
        setTimeout(() => {
            runTrafficCycle(light)
            setInterval(() => runTrafficCycle(light), 8000)
        }, delay)
        delay += 2000
    })
}

startTrafficSimulation()
