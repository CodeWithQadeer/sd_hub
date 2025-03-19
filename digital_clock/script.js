function updateClock() {
    let now = new Date()
    let hours = now.getHours() % 12 || 12
    let minutes = now.getMinutes().toString().padStart(2, "0")
    let seconds = now.getSeconds().toString().padStart(2, "0")
    let ampm = now.getHours() >= 12 ? "PM" : "AM"
    let timeString = `${hours}:${minutes}:${seconds} ${ampm}`

    let dateString = now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    })

    document.getElementById("time").textContent = timeString
    document.getElementById("date").textContent = dateString
}

setInterval(updateClock, 1000)
updateClock()
