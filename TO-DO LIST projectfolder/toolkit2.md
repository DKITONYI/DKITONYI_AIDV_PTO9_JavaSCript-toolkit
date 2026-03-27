# Toolkit 2 — To-Do List Project Guide 📗
### By [Your Name] | Moringa School Capstone

---

## 1. Project Overview
In this guide you will build a simple To-Do List web app 
using JavaScript. This project brings together all the 
core concepts from Toolkit 1 into one real working 
application.

**What the app does:**
- Add tasks to a list
- Mark tasks as done
- Delete tasks
- Shows total task count
- Displays success and error messages on the page

**Core concepts used:**
| Concept | How it is used |
|---|---|
| Variables | Storing the list of tasks |
| Functions | Add, delete and toggle tasks |
| Conditionals | Checking if input is empty |
| Loops | Displaying all tasks on the page |
| DOM Manipulation | Updating the page when tasks change |
| Error Handling | Catching errors when deleting tasks |

---

## 2. Setup Instructions
1. Make sure you have completed the setup in Toolkit 1
2. In your project folder you should have:
```
javascript-toolkit/
├── index.html
├── style.css
├── script.js
├── README.md
├── toolkit1.md
└── toolkit2.md
```
3. Open the folder in VS Code
4. Right click `index.html` and click **Open with Live Server**

---

## 3. The Code

### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, 
    initial-scale=1.0">
    <title>JavaScript To-Do List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>My To-Do List</h1>
            <p>Stay organized, stay awesome!</p>
        </div>
        <div class="card">
            <div class="badge">JavaScript Toolkit Project</div>
            <div class="input-row">
                <input type="text" id="taskInput" 
                placeholder="Enter a task...">
                <button class="add-btn" onclick="addTask()">
                Add</button>
            </div>
            <p id="message"></p>
            <p id="taskCount"></p>
            <ul id="taskList">
                <li class="empty">
                No tasks yet. Add one above!</li>
            </ul>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### `style.css`
```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', sans-serif;
}

body {
    min-height: 100vh;
    background-image: url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 40px 20px;
}

body::before {
    content: '';
    position: fixed;
    inset: 0;
    background: linear-gradient(135deg, rgba(120,40,180,0.55), rgba(210,60,130,0.45));
    z-index: 0;
}

.container {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 500px;
}

.header {
    text-align: center;
    color: white;
    margin-bottom: 24px;
}

.header h1 {
    font-size: 32px;
    font-weight: 700;
    text-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.header p {
    font-size: 15px;
    opacity: 0.9;
    margin-top: 6px;
}

.card {
    background: rgba(255,255,255,0.92);
    border-radius: 16px;
    padding: 28px;
    box-shadow: 0 8px 32px rgba(120,40,180,0.2);
}

.badge {
    display: inline-block;
    background: linear-gradient(135deg, #a855f7, #ec4899);
    color: white;
    font-size: 12px;
    padding: 4px 14px;
    border-radius: 20px;
    margin-bottom: 16px;
    font-weight: 600;
}

.input-row {
    display: flex;
    gap: 10px;
    margin-bottom: 16px;
}

.input-row input {
    flex: 1;
    padding: 10px 14px;
    border: 2px solid #e0b0f0;
    border-radius: 10px;
    font-size: 14px;
    outline: none;
    color: #4a1570;
    background: #fdf6ff;
}

.input-row input:focus {
    border-color: #a855f7;
}

button.add-btn {
    padding: 10px 20px;
    background: linear-gradient(135deg, #a855f7, #ec4899);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
}

#message {
    font-size: 13px;
    min-height: 20px;
    margin-bottom: 10px;
    font-weight: 500;
}

#taskCount {
    font-size: 13px;
    color: #9c6ab0;
    margin-bottom: 12px;
}

#taskList {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.task-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px;
    background: linear-gradient(135deg, #fdf4ff, #fff0f7);
    border: 1.5px solid #e9b8f5;
    border-radius: 10px;
}

.task-text {
    font-size: 14px;
    color: #5b1f8a;
    cursor: pointer;
}

.task-text.done {
    text-decoration: line-through;
    color: #c084fc;
}

.del-btn {
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    color: #ec4899;
    padding: 2px 8px;
    border-radius: 6px;
}

.del-btn:hover {
    background: #fce7f3;
}

.empty {
    text-align: center;
    color: #c084fc;
    font-size: 14px;
    padding: 20px 0;
}
```

### `script.js`
```javascript
// To-Do List App
// Concepts used: Variables, Functions, Conditionals,
// Loops, DOM Manipulation, Error Handling

let tasks = []

function addTask() {
    let taskInput = document.getElementById("taskInput")
    let taskText = taskInput.value.trim()
    let message = document.getElementById("message")

    if (taskText === "") {
        message.style.color = "#ec4899"
        message.innerHTML = "Please enter a task!"
        return
    }

    tasks.push(taskText)
    taskInput.value = ""
    message.style.color = "#a855f7"
    message.innerHTML = "Task added successfully!"
    renderTasks()
}

function renderTasks() {
    let taskList = document.getElementById("taskList")
    let taskCount = document.getElementById("taskCount")

    taskList.innerHTML = ""

    if (tasks.length === 0) {
        taskList.innerHTML =
            '<li class="empty">No tasks yet. Add one above!</li>'
        taskCount.innerHTML = ""
        return
    }

    taskCount.innerHTML = "Total tasks: " + tasks.length

    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li")
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

function toggleDone(element) {
    element.classList.toggle("done")
}

function deleteTask(index) {
    try {
        tasks.splice(index, 1)
        renderTasks()
        let message = document.getElementById("message")
        message.style.color = "#ec4899"
        message.innerHTML = "Task deleted!"
    } catch (error) {
        document.getElementById("message").innerHTML =
            "Something went wrong: " + error.message
    }
}

document.getElementById("taskInput")
    .addEventListener("keypress", function(e) {
    if (e.key === "Enter") addTask()
})
```

---

## 4. How to Test the Project

| Test | What to do | Expected result |
|---|---|---|
| Add a task | Type a task and click Add | Task appears in the list |
| Add empty task | Click Add with nothing typed | Error message appears |
| Mark as done | Click on a task text | Text gets a strikethrough |
| Delete a task | Click the ✕ button | Task is removed from list |
| Press Enter | Type a task and press Enter | Task is added |
| Task count | Add multiple tasks | Count updates correctly |


---

## 5. Reference Resources
- MDN DOM Manipulation: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
- W3Schools JavaScript Arrays: https://www.w3schools.com/js/js_arrays.asp
- W3Schools JavaScript Events: https://www.w3schools.com/js/js_events.asp
```

---

