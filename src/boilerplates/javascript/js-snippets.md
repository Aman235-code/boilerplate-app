<h1 class="text-white text-2xl font-bold text-center">JavaScript Snippets</h1>
<p class="text-white text-center mb-4">A collection of commonly used JavaScript snippets.</p>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">1. Console Log</h3>
<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-js">
console.log("Hello, World!");
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">2. DOM Select & Update</h3>
<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-js">
document.getElementById("title").innerText = "Updated Title";
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">3. Event Listener</h3>
<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-js">
document.querySelector("button").addEventListener("click", () => {
  alert("Button clicked!");
});
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">4. Arrow Function</h3>
<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-js">
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">5. Fetch API (Get Data)</h3>
<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-js">
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data));
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">6. Local Storage</h3>
<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-js">
// Save
localStorage.setItem("theme", "dark");
// Get
console.log(localStorage.getItem("theme"));
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">7. Set Timeout</h3>
<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-js">
setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">8. Array Map</h3>
<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-js">
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">9. Object Destructuring</h3>
<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-js">
const user = { name: "Aman", age: 22 };
const { name, age } = user;
console.log(name, age);
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">10. Try / Catch Error Handling</h3>
<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-js">
try {
  let result = riskyFunction();
} catch (error) {
  console.error("Error:", error.message);
}
</code></pre>
