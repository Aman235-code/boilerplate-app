<h1 class="text-white text-2xl font-bold text-center">CSS Snippets</h1>
<p class="text-white text-center mb-4">A collection of commonly used CSS snippets.</p>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">1. Center a Div (Flexbox)</h3>
<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-css">
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">2. Responsive Image</h3>
<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-css">
img {
  max-width: 100%;
  height: auto;
}
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">3. Text Overflow Ellipsis</h3>
<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-css">
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">4. Button Hover Effect</h3>
<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-css">
button {
  background: #4f46e5;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background: #4338ca;
}
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">5. Sticky Navbar</h3>
<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-css">
.navbar {
  position: sticky;
  top: 0;
  background: #111;
  padding: 10px;
}
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">6. Grid Layout</h3>
<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-css">
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">7. Box Shadow</h3>
<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-css">
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 8px;
}
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">8. Media Query</h3>
<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-css">
@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">9. Gradient Background</h3>
<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-css">
.gradient {
  background: linear-gradient(45deg, #4f46e5, #ec4899);
}
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">10. Animation (Fade In)</h3>
<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-css">
.fade-in {
  animation: fadeIn 2s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</code></pre>
