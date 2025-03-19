let index = 0
const slides = document.querySelectorAll("#carousel img")
const totalSlides = slides.length
const carousel = document.getElementById("carousel")

function showSlide(i) {
    index = (i + totalSlides) % totalSlides
    carousel.style.transform = `translateX(-${index * 100}%)`
}

document.getElementById("prev").addEventListener("click", () => showSlide(index - 1))
document.getElementById("next").addEventListener("click", () => showSlide(index + 1))

setInterval(() => showSlide(index + 1), 3000)
