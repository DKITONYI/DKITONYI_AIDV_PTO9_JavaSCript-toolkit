// To-Do List App
// Concepts used: Variables, Functions, Conditionals,
// Loops, DOM Manipulation, Error Handling

// Array to store tasks (this is a variable holding a list)
let tasks = []

// Function to add a new task
function addTask() {
    // Get the value from the input field (DOM Manipulation)
    let taskInput = document.getElementById("taskInput")
    let taskText = taskInput.value

    // Conditional - check if input is empty
    if (taskText === "") {
        document.getElementById("message").innerHTML = 
        "⚠️ Please enter a task!"
        return
    }

    // Add task to our tasks array
    tasks.push(taskText)

    // Clear the input field
    taskInput.value = ""
    document.getElementById("message").innerHTML = ""

    // Render the tasks on the page
    renderTasks()
}

// Function to display all tasks on the page
function renderTasks() {
    let taskList = document.getElementById("taskList")
    taskList.innerHTML = ""

    // Loop through all tasks and display them
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li")
        li.innerHTML = `
            <span onclick="toggleDone(this)">${tasks[i]}</span>
            <button onclick="deleteTask(${i})">❌</button>
        `
        taskList.appendChild(li)
    }
}

// Function to mark a task as done
function toggleDone(element) {
    element.classList.toggle("done")
}

// Function to delete a task
function deleteTask(index) {
    // Error handling - make sure index exists
    try {
        tasks.splice(index, 1)
        renderTasks()
    } catch (error) {
        console.log("Error deleting task:", error)
    }
}