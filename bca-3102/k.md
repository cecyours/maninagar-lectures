Below is a sample `.md` (Markdown) file that contains basic questions and answers related to HTML, CSS, and JavaScript. You can copy this content into a `.md` file and save it for reference.

```markdown
# Basic HTML, CSS, and JavaScript Questions & Answers

## HTML

### 1. What is HTML?
**Answer:**  
HTML stands for **HyperText Markup Language**. It is the standard markup language used to create and structure content on the web.

---

### 2. What is the basic structure of an HTML document?
**Answer:**  
```html
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

---

### 3. What are HTML tags and attributes?
**Answer:**  
- **Tags:** HTML tags are used to define elements on a webpage. They are enclosed in angle brackets, e.g., `<p>`, `<h1>`, `<div>`.
- **Attributes:** Attributes provide additional information about an element. They are placed inside the opening tag, e.g., `<img src="image.jpg" alt="Description">`.

---

### 4. What is the difference between `<div>` and `<span>`?
**Answer:**  
- `<div>` is a block-level element used to group larger sections of content.
- `<span>` is an inline element used to style or group smaller portions of text.

---

## CSS

### 1. What is CSS?
**Answer:**  
CSS stands for **Cascading Style Sheets**. It is used to style and layout web pages, including colors, fonts, spacing, and responsiveness.

---

### 2. How do you include CSS in an HTML document?
**Answer:**  
There are three ways:
1. **Inline CSS:** Using the `style` attribute inside an HTML tag.
   ```html
   <p style="color: red;">This is red text.</p>
   ```
2. **Internal CSS:** Using a `<style>` tag in the `<head>` section.
   ```html
   <style>
       p { color: red; }
   </style>
   ```
3. **External CSS:** Linking an external `.css` file.
   ```html
   <link rel="stylesheet" href="styles.css">
   ```

---

### 3. What is the box model in CSS?
**Answer:**  
The CSS box model consists of:
- **Content:** The actual content of the element.
- **Padding:** Space between the content and the border.
- **Border:** A border surrounding the padding.
- **Margin:** Space outside the border, separating the element from others.

---

### 4. What is the difference between `margin` and `padding`?
**Answer:**  
- **Margin:** Space outside the border of an element.
- **Padding:** Space inside the border, between the content and the border.

---

## JavaScript

### 1. What is JavaScript?
**Answer:**  
JavaScript is a programming language used to make web pages interactive. It allows you to add dynamic behavior, manipulate the DOM, and handle events.

---

### 2. How do you include JavaScript in an HTML document?
**Answer:**  
There are two ways:
1. **Internal JavaScript:** Using a `<script>` tag in the `<head>` or `<body>`.
   ```html
   <script>
       alert("Hello, World!");
   </script>
   ```
2. **External JavaScript:** Linking an external `.js` file.
   ```html
   <script src="script.js"></script>
   ```

---

### 3. What is the DOM?
**Answer:**  
DOM stands for **Document Object Model**. It is a programming interface for HTML and XML documents. It represents the structure of a document as a tree of objects, allowing JavaScript to manipulate the content, structure, and style of a webpage.

---

### 4. What is the difference between `let`, `const`, and `var`?
**Answer:**  
- **`var`:** Function-scoped, can be redeclared and updated.
- **`let`:** Block-scoped, cannot be redeclared but can be updated.
- **`const`:** Block-scoped, cannot be redeclared or updated (immutable).

---

### 5. What is an event listener in JavaScript?
**Answer:**  
An event listener is a function that waits for a specific event (e.g., click, hover, keypress) to occur on an element. Example:
```javascript
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});
```
Here’s a detailed `.md` file that covers **HTML tables, canvas, heading tags**, and **CSS**. This file provides questions and answers to help you understand these concepts better.

```markdown
# HTML Tables, Canvas, Heading Tags & CSS

## HTML Tables

### 1. What is an HTML table?
**Answer:**  
An HTML table is used to display data in rows and columns. It is created using the `<table>` tag, with rows defined by `<tr>`, headers by `<th>`, and data cells by `<td>`.

---

### 2. How do you create a basic HTML table?
**Answer:**  
```html
<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>John</td>
        <td>25</td>
    </tr>
    <tr>
        <td>Jane</td>
        <td>30</td>
    </tr>
</table>
```

---

### 3. What are the `<thead>`, `<tbody>`, and `<tfoot>` tags used for?
**Answer:**  
- `<thead>`: Defines the header section of the table.
- `<tbody>`: Defines the main body of the table.
- `<tfoot>`: Defines the footer section of the table.

Example:
```html
<table>
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Footer 1</td>
            <td>Footer 2</td>
        </tr>
    </tfoot>
</table>
```

---

### 4. How do you merge cells in an HTML table?
**Answer:**  
Use the `colspan` attribute to merge columns and the `rowspan` attribute to merge rows.

Example:
```html
<table>
    <tr>
        <th colspan="2">Name and Age</th>
    </tr>
    <tr>
        <td>John</td>
        <td>25</td>
    </tr>
</table>
```

---

## HTML Canvas

### 1. What is the HTML `<canvas>` element?
**Answer:**  
The `<canvas>` element is used to draw graphics, animations, or other visual content on a webpage using JavaScript. It provides a drawing surface for rendering shapes, text, and images.

---

### 2. How do you create a canvas in HTML?
**Answer:**  
```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

---

### 3. How do you draw on a canvas using JavaScript?
**Answer:**  
Example: Drawing a rectangle:
```javascript
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 100, 50);
```

---

### 4. What are some common canvas methods?
**Answer:**  
- `fillRect(x, y, width, height)`: Draws a filled rectangle.
- `strokeRect(x, y, width, height)`: Draws a rectangular outline.
- `beginPath()`: Starts a new path.
- `moveTo(x, y)`: Moves the drawing cursor to a point.
- `lineTo(x, y)`: Draws a line to a point.
- `arc(x, y, radius, startAngle, endAngle)`: Draws an arc or circle.

---

## HTML Heading Tags

### 1. What are HTML heading tags?
**Answer:**  
HTML heading tags (`<h1>` to `<h6>`) are used to define headings on a webpage. `<h1>` is the highest level (most important), and `<h6>` is the lowest level (least important).

---

### 2. How do you use heading tags?
**Answer:**  
```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>
```

---

### 3. Why are heading tags important for SEO?
**Answer:**  
Heading tags help search engines understand the structure and content of a webpage. Proper use of headings improves accessibility and SEO rankings.

---

## CSS

### 1. What is CSS?
**Answer:**  
CSS stands for **Cascading Style Sheets**. It is used to style and layout web pages, including colors, fonts, spacing, and responsiveness.

---

### 2. What are CSS selectors?
**Answer:**  
CSS selectors are used to target HTML elements for styling. Examples:
- **Element selector**: `p { color: red; }`
- **Class selector**: `.myClass { font-size: 16px; }`
- **ID selector**: `#myId { background-color: yellow; }`
- **Attribute selector**: `input[type="text"] { border: 1px solid black; }`

---

### 3. What is the difference between `margin` and `padding`?
**Answer:**  
- **Margin**: Space outside the border of an element.
- **Padding**: Space inside the border, between the content and the border.

---

### 4. What is the CSS box model?
**Answer:**  
The CSS box model consists of:
- **Content**: The actual content of the element.
- **Padding**: Space between the content and the border.
- **Border**: A border surrounding the padding.
- **Margin**: Space outside the border, separating the element from others.

---

### 5. What is Flexbox in CSS?
**Answer:**  
Flexbox is a layout model that allows you to design flexible and responsive layouts. It aligns and distributes space among items in a container.

Example:
```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

---

### 6. What is CSS Grid?
**Answer:**  
CSS Grid is a two-dimensional layout system that allows you to create complex grid-based layouts.

Example:
```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
}
```

---

### 7. What is the difference between `position: absolute` and `position: relative`?
**Answer:**  
- **`position: relative`**: Positions the element relative to its normal position.
- **`position: absolute`**: Positions the element relative to its nearest positioned ancestor (or the document if none exists).

---
