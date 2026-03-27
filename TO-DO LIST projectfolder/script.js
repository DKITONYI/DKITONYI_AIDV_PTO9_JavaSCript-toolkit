// To-Do List App
// Concepts used: Variables, Functions, Conditionals,
// Loops, DOM Manipulation, Error Handling

// Variable — an array to store all our tasks
let tasks = []

// Function — adds a new task to the list
function addTask() {

    // DOM Manipulation — getting the value from the input field
    let taskInput = document.getElementById("taskInput")

    // .trim() removes any accidental spaces before or after the text
    let taskText = taskInput.value.trim()

    // Getting the message element to show feedback to the user
    let message = document.getElementById("message")

    // Conditional — check if the input is empty
    if (taskText === "") {
        // Show an error message in red if input is empty
        message.style.color = "#ec4899"
        message.innerHTML = "⚠️ Please enter a task!"
        return // Stop the function here
    }

    // Add the task text to our tasks array
    tasks.push(taskText)

    // Clear the input field so user can type a new task
    taskInput.value = ""

    // Show a success message in purple
    message.style.color = "#a855f7"
    message.innerHTML = "✅ Task added successfully!"

    // Update the page with the new task
    renderTasks()
}

// Function — displays all tasks on the page
function renderTasks() {
    // Getting the task list and task count elements
    let taskList = document.getElementById("taskList")
    let taskCount = document.getElementById("taskCount")

    // Clear the current list before re-rendering
    taskList.innerHTML = ""

    // Conditional — if no tasks, show empty message
    if (tasks.length === 0) {
        taskList.innerHTML =
            '<li class="empty">No tasks yet. Add one above!</li>'
        // Clear the task count when list is empty
        taskCount.innerHTML = ""
        return
    }

    // Show the total number of tasks on the page
    taskCount.innerHTML = "Total tasks: " + tasks.length

    // Loop — go through each task and display it
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li")

        // Each task has:
        // - a span with the task text (click to mark done)
        // - a delete button
        li.className = "task-item"
        li.innerHTML = `
            <span class="task-text" 
            onclick="toggleDone(this)">${tasks[i]}</span>
            <button class="del-btn" 
            onclick="deleteTask(${i})">✕</button>
        `
        taskList.appendChild(li)
    }
}

// Function — marks a task as done or undone when clicked
function toggleDone(element) {
    // toggle adds the class "done" if it is not there
    // and removes it if it is already there
    element.classList.toggle("done")

    // Update the message to tell the user what happened
    let message = document.getElementById("message")
    if (element.classList.contains("done")) {
        message.style.color = "#a855f7"
        message.innerHTML = "✔️ Task marked as done!"
    } else {
        message.style.color = "#a855f7"
        message.innerHTML = "↩️ Task marked as undone!"
    }
}

// Function — deletes a task from the list
function deleteTask(index) {
    // Error handling — catches any unexpected errors
    try {
        // splice removes 1 item at the given index
        tasks.splice(index, 1)

        // Re-render the list to reflect the change
        renderTasks()

        // Show a delete message in pink
        let message = document.getElementById("message")
        message.style.color = "#ec4899"
        message.innerHTML = "🗑️ Task deleted!"

    } catch (error) {
        // If something goes wrong show the error on the page
        document.getElementById("message").innerHTML =
            "Something went wrong: " + error.message
    }
}

// Allow pressing Enter key to add a task
// instead of always clicking the Add button
document.getElementById("taskInput")
    .addEventListener("keypress", function(e) {
    if (e.key === "Enter") addTask()
})