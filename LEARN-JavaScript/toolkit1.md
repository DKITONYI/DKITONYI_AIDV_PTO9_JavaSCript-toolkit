# Toolkit 1 — JavaScript Introduction & Core Concepts 📘
### By [Your Name] | Moringa School Capstone

---

## 1. Overview
JavaScript is a programming language that makes websites 
interactive. It runs in the browser and on servers via 
Node.js. It is the most widely used programming language 
in the world and is used in web apps, mobile apps, 
games and APIs.

**What makes JavaScript unique:**
- It runs directly in the browser — no installation needed
- It works on every device that has a browser
- It can be used for both frontend and backend development
- It is beginner friendly and widely supported

---

## 2. Setup Instructions

### What you need:
- A computer with Google Chrome browser
- VS Code code editor → https://code.visualstudio.com
- Live Server VS Code extension

### Step by step setup:
1. Download and install VS Code
2. Open VS Code and click the Extensions icon on the left
3. Search for **Live Server** by Ritwick Dey and install it
4. Create a new folder called `javascript-toolkit`
5. Inside the folder create three files:
   - `index.html`
   - `style.css`
   - `script.js`

### Verify your setup:
1. Paste this into your `script.js`:
```javascript
// This line finds the element with id="output" in your HTML
// and puts the text "JavaScript is working!" inside it
document.getElementById("output").innerHTML = "JavaScript is working!"
```
2. Paste this into your `index.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Toolkit</title>
</head>
<body>
    <!-- This is where JavaScript will display its output -->
    <div id="output"></div>

    <!-- This line loads your JavaScript file -->
    <script src="script.js"></script>
</body>
</html>
```
3. Right click `index.html` and click **Open with Live Server**
4. You should see **JavaScript is working!** on the page

---
## LETS CREATE YOUR FIRST JavaScript Program 
--- Create a new folder " first program"  and create the index.html and paste the code below. 
## 3. Hello World
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello World</title>
</head>
<body>
    <h1>My First JavaScript Program</h1>

    <!-- This empty div is where JavaScript will 
    display the Hello World message -->
    <div id="output"></div>

    <!-- Always place your script tag at the bottom 
    of the body so the HTML loads first -->
    <script src="script.js"></script>
</body>
</html>
```
--- paste this on the script.js file  in the first program folder.
```javascript
// ============================================
// MY FIRST JAVASCRIPT PROGRAM — Hello World
// ============================================

// "document" refers to the entire webpage
// "getElementById" finds an HTML element by its id
// "innerHTML" sets the content inside that element
// Together this line finds the div with id="output"
// and puts "Hello, World!" inside it

document.getElementById("output").innerHTML = "Hello, World!"
```

**What each line does:**
| Line | What it does |
|---|---|
| `// comment` | A note to yourself, JavaScript ignores it |
| `document.getElementById("output")` | Finds the element with id="output" on the page |
| `.innerHTML` | Sets the content inside that element |
| `"Hello, World!"` | The text we want to display |

---

## 4. Core Concepts

---

### Variables & Data Types
```javascript
// ============================================
// WHAT IS A VARIABLE?
// ============================================
// A variable is like a labeled box where you store information.
// You give the box a name, and put something inside it.
// Later you can open the box and use what is inside.
//
// HOW TO CREATE A VARIABLE:
// let variableName = value
//
// TYPES OF DATA you can store:
// String  — text, always wrapped in quotes e.g. "Hello"
// Number  — any number e.g. 20, 3.14
// Boolean — only two values: true or false
// ============================================

// Creating a String variable (stores text)
let name = "Moringa Student"

// Creating a Number variable (stores a number)
let age = 20

// Creating a Boolean variable (stores true or false)
let isLearning = true

// Displaying all three variables on the webpage
// "<br>" is HTML for a line break — it moves to the next line
document.getElementById("variables").innerHTML =
    "Name: " + name + "<br>" +
    "Age: " + age + "<br>" +
    "Is Learning: " + isLearning
```

---

### Functions
```javascript
// ============================================
// WHAT IS A FUNCTION?
// ============================================
// A function is a reusable block of code that does 
// a specific job. Think of it like a recipe —
// you write it once and use it as many times as you want.
//
// HOW TO CREATE A FUNCTION:
// function functionName(input) {
//     // code to run
//     return result
// }
//
// HOW TO USE (call) A FUNCTION:
// functionName(value)
// ============================================

// Defining the function
// "name" here is a parameter — it is the input the function receives
function greet(name) {
    // "return" sends a value back when the function is called
    return "Hello " + name + "!"
}

// Calling the function twice with different inputs
// and displaying both results on the webpage
document.getElementById("functions").innerHTML =
    greet("Moringa Student") + "<br>" +
    greet("World")
```

---

### Conditionals
```javascript
// ============================================
// WHAT IS A CONDITIONAL?
// ============================================
// A conditional lets your code make decisions.
// Think of it like a traffic light:
// IF the light is green → go
// IF the light is red   → stop
//
// HOW TO WRITE A CONDITIONAL:
// if (condition) {
//     // runs if condition is TRUE
// } else {
//     // runs if condition is FALSE
// }
// ============================================

// A variable storing a student's score
let score = 75

// Check if the score is 50 or above
if (score >= 50) {
    // This runs if the condition is TRUE
    document.getElementById("conditionals").innerHTML =
        "You passed with a score of " + score + "!"
} else {
    // This runs if the condition is FALSE
    document.getElementById("conditionals").innerHTML =
        "You failed. Try again!"
}
```

---

### Loops
```javascript
// ============================================
// WHAT IS A LOOP?
// ============================================
// A loop repeats a block of code multiple times.
// Think of it like an alarm that rings every morning
// until you turn it off.
//
// HOW TO WRITE A FOR LOOP:
// for (start; condition; step) {
//     // code to repeat
// }
//
// let i = 1      → start counting from 1
// i <= 5         → keep going while i is 5 or less
// i++            → increase i by 1 each time
// ============================================

// This variable will collect all the output text
let output = ""

// This loop runs 5 times — from i=1 to i=5
for (let i = 1; i <= 5; i++) {
    // Each time it runs, it adds a new line to output
    // "+=" means "add to what is already there"
    output += "Count: " + i + "<br>"
}

// After the loop finishes, display all the output at once
document.getElementById("loops").innerHTML = output
```

---

### DOM Manipulation
```javascript
// ============================================
// WHAT IS THE DOM?
// ============================================
// DOM stands for Document Object Model.
// It is a live map of your webpage that JavaScript
// can read and change at any time.
// Think of it like a remote control for your webpage —
// you can use it to change text, colors, styles
// and respond to user actions like clicks.
//
// COMMON DOM METHODS:
// document.getElementById("id")   → find an element by id
// element.innerHTML = "text"      → change the text inside
// element.style.color = "purple"  → change the color
// element.addEventListener(...)   → listen for user actions
// ============================================

// Finding the heading element and changing its text
document.getElementById("heading").innerHTML =
    "JavaScript changed this text!"

// Changing the color of the heading to purple
document.getElementById("heading").style.color = "purple"

// This function runs when the user clicks a button
// It finds the element with id="clickOutput"
// and puts a message inside it
function handleClick() {
    document.getElementById("clickOutput").innerHTML =
        "You clicked the button!"
}
```

---

### Error Handling
```javascript
// ============================================
// WHAT IS ERROR HANDLING?
// ============================================
// Error handling lets your code deal with unexpected
// problems gracefully instead of crashing.
// Think of it like a safety net — if something goes
// wrong, the safety net catches it.
//
// HOW IT WORKS:
// try {
//     // code that might cause an error
// } catch (error) {
//     // what to do IF an error happens
// }
//
// If the try block works fine, catch is ignored.
// If the try block fails, catch runs instead.
// ============================================

try {
    // parseInt() tries to convert text into a number
    // "abc" is not a number so it returns NaN
    // NaN means "Not a Number"
    let num = parseInt("abc")

    // isNaN() checks if a value is NaN (Not a Number)
    // If it is, we throw (create) a new Error
    if (isNaN(num)) {
        throw new Error("That is not a valid number!")
    }

} catch (error) {
    // If an error was thrown above, this block runs
    // error.message gives us the description of the error
    document.getElementById("errorOutput").innerHTML =
        "Error caught: " + error.message
}
```

---

## 5. Common Errors & How to Fix Them

| Error | Why it happens | How to fix it |
|---|---|---|
| `ReferenceError: x is not defined` | Using a variable before declaring it | Always declare with `let` or `const` first |
| `SyntaxError: Unexpected token` | Missing bracket or semicolon | Check for missing punctuation |
| `TypeError: null is not an object` | HTML element not found | Make sure the element exists in HTML |
| `Uncaught RangeError` | Infinite loop | Add a proper loop ending condition |
| `= vs ==` confusion | Wrong operator used | Use `===` for comparison, `=` for assignment only |

---


---

## 6. Reference Resources
- Official JavaScript Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- W3Schools JavaScript Tutorial: https://www.w3schools.com/js
- FreeCodeCamp JavaScript Course: https://www.freecodecamp.org
- JavaScript 30 Free Projects: https://javascript30.com
- VS Code Download: https://code.visualstudio.com