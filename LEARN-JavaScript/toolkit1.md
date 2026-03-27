# Toolkit 1 — JavaScript Introduction & Core Concepts 📘
### By DIANA KITONYI

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
    <div id="output"></div>
    <script src="script.js"></script>
</body>
</html>
```
3. Right click `index.html` and click **Open with Live Server**
4. You should see **JavaScript is working!** on the page

---

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
    <div id="output"></div>
    <script src="script.js"></script>
</body>
</html>
```
```javascript
// My first JavaScript program
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

### Variables & Data Types
```javascript
let name = "Moringa Student"
let age = 20
let isLearning = true

document.getElementById("variables").innerHTML =
    "Name: " + name + "<br>" +
    "Age: " + age + "<br>" +
    "Is Learning: " + isLearning
```

### Functions
```javascript
function greet(name) {
    return "Hello " + name + "!"
}

document.getElementById("functions").innerHTML =
    greet("Moringa Student") + "<br>" +
    greet("World")
```

### Conditionals
```javascript
let score = 75

if (score >= 50) {
    document.getElementById("conditionals").innerHTML =
        "You passed with a score of " + score + "!"
} else {
    document.getElementById("conditionals").innerHTML =
        "You failed. Try again!"
}
```

### Loops
```javascript
let output = ""

for (let i = 1; i <= 5; i++) {
    output += "Count: " + i + "<br>"
}

document.getElementById("loops").innerHTML = output
```

### DOM Manipulation
```javascript
document.getElementById("heading").innerHTML = 
    "JavaScript changed this!"

document.getElementById("heading").style.color = "purple"

function handleClick() {
    document.getElementById("clickOutput").innerHTML =
        "You clicked the button!"
}
```

### Error Handling
```javascript
try {
    let num = parseInt("abc")
    if (isNaN(num)) {
        throw new Error("That is not a valid number!")
    }
} catch (error) {
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

## 6. AI Prompts Used & Learning Reflections

**Prompt I:** "I am a beginner in JavaScript and I am 
interested in learning the language. What is JavaScript 
and what makes it unique compared to other programming 
languages?"
**Reflection:** I learned that JavaScript is the most 
widely used programming language in the world. It runs 
in the browser without any installation and is used 
everywhere from websites to mobile apps.

**Prompt II:** "I have just finished learning the 
definition of JavaScript. What are the core concepts 
a complete beginner must understand?"
**Reflection:** I learned that JavaScript has 7 core 
building blocks. Understanding these first makes 
everything else easier to learn.

**Prompt III:** "I have just finished learning the 
definition of JavaScript and its core concepts. How 
do I install and set up my development environment?"
**Reflection:** I learned that JavaScript does not need 
to be installed separately since it already runs in 
the browser. I only needed VS Code and Live Server.

**Prompt IV:** "I have just finished setting up 
JavaScript. What are the most common errors beginners 
make and how do I fix them?"
**Reflection:** I learned that most beginner errors 
come from small mistakes like missing brackets or 
using variables before declaring them.

**Prompt V:** "I have just learned the basics of 
JavaScript. Walk me through writing a simple 
Hello World program step by step."
**Reflection:** Writing Hello World helped me understand 
how JavaScript connects to HTML through the DOM.

---

## 7. Reference Resources
- Official JavaScript Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- W3Schools JavaScript Tutorial: https://www.w3schools.com/js
- FreeCodeCamp JavaScript Course: https://www.freecodecamp.org
- JavaScript 30 Free Projects: https://javascript30.com
- VS Code Download: https://code.visualstudio.com