let taskInput = document.getElementById("taskInput")
let addTask = document.getElementById("addTask")
let taskList = document.getElementById("taskList")

function createTaskElement(taskText) {
    let li = document.createElement("li")
    li.className = "flex justify-between items-center bg-gray-200 p-2 rounded"

    let span = document.createElement("span")
    span.textContent = taskText
    span.className = "flex-grow cursor-pointer"

    let editBtn = document.createElement("button")
    editBtn.textContent = "Edit"
    editBtn.className = "bg-yellow-400 text-white px-2 py-1 rounded text-sm mr-2 hover:bg-yellow-500"
    editBtn.addEventListener("click", () => {
        let newText = prompt("Edit task:", span.textContent)
        if (newText) span.textContent = newText
    })

    let doneBtn = document.createElement("button")
    doneBtn.textContent = "Done"
    doneBtn.className = "bg-green-500 text-white px-2 py-1 rounded text-sm mr-2 hover:bg-green-600"
    doneBtn.addEventListener("click", () => {
        li.classList.toggle("line-through")
    })

    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    deleteBtn.className = "bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li)
    })

    li.appendChild(span)
    li.appendChild(editBtn)
    li.appendChild(doneBtn)
    li.appendChild(deleteBtn)
    taskList.appendChild(li)
}

addTask.addEventListener("click", () => {
    let taskText = taskInput.value.trim()
    if (taskText !== "") {
        createTaskElement(taskText)
        taskInput.value = ""
    }
})

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask.click()
})