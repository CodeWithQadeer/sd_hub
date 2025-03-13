//creating an element p and adding it to the div with class demo
let element = document.createElement("p")
element.textContent = "Paragraph added uding js"
document.querySelector(".demo").appendChild(element)
//styling main div
document.querySelector(".mainDiv").classList.add("h-200","rounded-2xl","m-12","p-10")
//taking bg color from user and setting it as background color
let bgClr = prompt("Enter the background color")
document.querySelector("body").style.backgroundColor = bgClr  