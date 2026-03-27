


### Issue 1 — Mark as done not visible
**What happened:**
Clicking on a task text did nothing visible even
though the toggleDone function was working.

**Why it happened:**
AI explained that it was caused by three main problems that cause the errror ;
1. Mark as done — the toggleDone works but there is no .done style in your CSS so nothing is visible
2. Task count — there is no taskCount element being updated
3. Success/error messages — the message clears immediately after adding instead of showing a success message

**How it was fixed:**
It gave me a code with i inserted to my task count function in my script.js and style.js
Added the `.done` style to the CSS file.
```css
/* Added this to style.css */
.task-text.done {
    text-decoration: line-through;
    color: #c084fc;
}
```



