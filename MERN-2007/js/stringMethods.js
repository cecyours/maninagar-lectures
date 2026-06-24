const data = document.getElementById('data');

let text = "Hello JavaScript 😊 World";

// Original String
data.innerHTML += `<h1>Original String</h1>`;
data.innerHTML += text + "<br><br>";


// slice(start, end)
data.innerHTML += `<h1>slice(0, 5)</h1>`;
data.innerHTML += text.slice(0, 5) + "<br><br>";

data.innerHTML += `<h1>slice(-5)</h1>`;
data.innerHTML += text.slice(-5) + "<br><br>";


// substring(start, end)
data.innerHTML += `<h1>substring(6, 16)</h1>`;
data.innerHTML += text.substring(6, 16) + "<br><br>";

data.innerHTML += `<h1>substring(-5, 5)</h1>`;
data.innerHTML += text.substring(-5, 5) + "<br><br>";


// split(separator, limit)
data.innerHTML += `<h1>split(" ")</h1>`;
data.innerHTML += text.split(" ") + "<br><br>";

data.innerHTML += `<h1>split(" ", 2)</h1>`;
data.innerHTML += text.split(" ", 2) + "<br><br>";


// at(index)
data.innerHTML += `<h1>at(1)</h1>`;
data.innerHTML += text.at(1) + "<br><br>";

data.innerHTML += `<h1>at(-1)</h1>`;
data.innerHTML += text.at(-1) + "<br><br>";


// charAt(index)
data.innerHTML += `<h1>charAt(1)</h1>`;
data.innerHTML += text.charAt(1) + "<br><br>";

data.innerHTML += `<h1>charAt(6)</h1>`;
data.innerHTML += text.charAt(6) + "<br><br>";


// charCodeAt(index)
data.innerHTML += `<h1>charCodeAt(0)</h1>`;
data.innerHTML += text.charCodeAt(0) + "<br><br>";

data.innerHTML += `<h1>charCodeAt(1)</h1>`;
data.innerHTML += text.charCodeAt(1) + "<br><br>";


// codePointAt(pos)
data.innerHTML += `<h1>codePointAt(0)</h1>`;
data.innerHTML += text.codePointAt(0) + "<br><br>";

data.innerHTML += `<h1>codePointAt(17)</h1>`;
data.innerHTML += text.codePointAt(17) + "<br><br>";