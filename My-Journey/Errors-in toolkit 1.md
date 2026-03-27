## Common Issues & Fixes

---

### Issue 1 — CSS not loading
**What happened:**
After creating the HTML and CSS files the page showed
plain unstyled HTML with no colors or formatting.

**Why it happened:**
AI explained to me that CSS file was not linked correctly in the HTML file.
The link tag had a typo in the filename.

**How it was fixed:**
AI corrected me by telling me to check the link tag in the head section of index.html
and corrected the filename from `Style.css` to
`style.css`. File names are case sensitive.
```html
<!-- Wrong -->
<link rel="stylesheet" href="Style.css">

<!-- Correct -->
<link rel="stylesheet" href="style.css">
```

---
## Issue 2 — JavaScript not running
**What happened:**
The page loaded but nothing happened — no text appeared
and no errors showed.

**Why it happened:**
AI explained that script tag was placed in the head section before
the HTML elements loaded. JavaScript was trying to
find elements that did not exist yet.

**How it was fixed:**
AI told me to try Moved the script tag to the bottom of the body section
just before the closing body tag so the HTML loads
before JavaScript runs.
```html
<!-- Wrong — script in the head -->
<head>
    <script src="script.js"></script>
</head>

<!-- Correct — script at the bottom of body -->
<body>
    <div id="output"></div>
    <script src="script.js"></script>
</body>
```


