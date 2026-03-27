# JavaScript Beginner Toolkit 🚀
### By DIANA KITONYI

---

## 1. Overview
JavaScript is a programming language that makes websites 
interactive. It runs in the browser and on servers via 
Node.js. It is the most widely used programming language 
in the world and is used in web apps, mobile apps, games 
and APIs. 


---

## 2. Setup Instructions
### What you need:
- A computer with a browser (Google Chrome recommended)
- VS Code code editor 
- Live Server VS Code extension

### Steps:
1. Download and install VS Code using the link below (https://code.visualstudio.com)
2. Install the Live Server extension- Click on the sixth icon "extension"  and search for Live Server extension and click install.

---

## 3. Minimal Working Example
### Hello World
**script.js**
\`\`\`javascript
console.log("Hello, World!")
document.write("<h2>Hello, World!</h2>")
alert("Hello, World!")
\`\`\`
Open the browser console (F12) to see the output.

---

## 4. Core Concepts with Code Examples
### Variables & Data Types
\`\`\`javascript
let name = "Moringa Student"
let age = 20
let isLearning = true
\`\`\`

### Functions
\`\`\`javascript
function greet(name) {
    console.log("Hello " + name + "!")
}
greet("World")
\`\`\`

### Conditionals
\`\`\`javascript
let score = 75
if (score >= 50) {
    console.log("You passed!")
} else {
    console.log("Try again!")
}
\`\`\`

### Loops
\`\`\`javascript
for (let i = 1; i <= 5; i++) {
    console.log("Count: " + i)
}
\`\`\`

### DOM Manipulation
\`\`\`javascript
document.getElementById("heading").innerHTML = "Updated!"
\`\`\`

### Error Handling
\`\`\`javascript
try {
    let result = 10 / 0
    console.log(result)
} catch (error) {
    console.log("Error:", error)
}
\`\`\`

---

## 5. Small Working Project — To-Do List App
A simple To-Do List app that allows you to:
- Add tasks
- Mark tasks as done
- Delete tasks

**How to run:**
1. Clone the repo or download the files
2. Open index.html with Live Server
3. Type a task and click Add Task

**Concepts used:** Variables, Functions, Conditionals, 
Loops, DOM Manipulation, Error Handling

---

## 6. AI Prompts Used & Learning Reflections

**Prompt I:** "I am a beginner in JavaScript and I am 
interested in learning the language..."
**Reflection:** I learned that JavaScript is the most 
widely used programming language in the world. It runs 
in the browser and on servers and is used everywhere 
from websites to mobile apps.

**Prompt II:** "I have just finished learning the 
definition of JavaScript. I want to now know the 
important concepts..."
**Reflection:** I learned that JavaScript has 7 core 
building blocks. Understanding these concepts first 
makes everything else easier to learn.

**Prompt III:** "I have just finished learning the 
definition of JavaScript and its core concepts. I want 
to now know how to install JavaScript..."
**Reflection:** I learned that JavaScript does not need 
to be installed separately since it runs in the browser. 
I only needed VS Code and the Live Server extension.

**Prompt IV:** "I have just finished learning the 
definition of JavaScript, its core concepts and how to 
install and set up JavaScript on my PC..."
**Reflection:** I learned that most beginner errors come 
from small mistakes like missing brackets or using 
variables before declaring them. Good habits early on 
save a lot of debugging time.

**Prompt V:** "I have just finished learning the 
definition of JavaScript, its core concepts, how to 
install and set up JavaScript on my PC and common 
errors..."
**Reflection:** I learned that Hello World is the 
traditional first program in any language. Writing it 
helped me understand how JavaScript connects to HTML.

**Prompt VI:** "I have just finished writing my first 
Hello World program using JavaScript..."
**Reflection:** I learned that the DOM is like a live 
map of the webpage that JavaScript can read and change. 
This is what makes webpages interactive.

**Prompt VII:** "I have just finished learning 
JavaScript basics including core concepts, setup, 
common errors, my first Hello World program and basic 
DOM manipulation..."
**Reflection:** Building the To-Do List project helped 
me see how all the concepts work together in a real 
application. Testing it helped me find and fix bugs 
on my own.

---

## 7. Common Errors & How to Fix Them

| Error | Why it happens | Fix |
|---|---|---|
| ReferenceError: x is not defined | Variable used before declaring | Declare with let or const first |
| SyntaxError: Unexpected token | Missing bracket or semicolon | Check for missing punctuation |
| TypeError: null is not an object | HTML element not found | Make sure element exists in HTML |
| Uncaught RangeError | Infinite loop | Add proper loop ending condition |
| = vs == confusion | Wrong operator used | Use === for comparison, = for assignment |

---

## 8. Reference Resources
- Official JavaScript Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- JavaScript Tutorial for Beginners: https://www.w3schools.com/js
- FreeCodeCamp JavaScript Course: https://www.freecodecamp.org
- JavaScript 30 (free projects): https://javascript30.com
- VS Code Download: https://code.visualstudio.com
```

---

# 📅 FRIDAY — Final Polish & Submit

---

### Your GitHub repo should have this structure:
```
javascript-toolkit/
├── index.html
├── style.css
├── script.js
├── toolkit.md
└── README.md