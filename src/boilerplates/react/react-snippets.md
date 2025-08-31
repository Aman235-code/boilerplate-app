<h1 class="text-white text-2xl font-bold text-center">React Snippets</h1>
<p class="text-white text-center mb-4">A collection of commonly used React snippets.</p>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">1. Basic Component</h3>
<pre class="bg-gray-800 rounded-lg p-2 mb-4"><code class="language-jsx">
function Hello() {
  return &lt;h1&gt;Hello, World!&lt;/h1&gt;;
}
export default Hello;
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">2. useState Hook</h3>
<pre class="bg-gray-800 rounded-lg p-2 mb-4"><code class="language-jsx">
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    &lt;div&gt;
      &lt;p&gt;{count}&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Increment&lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">3. useEffect Hook</h3>
<pre class="bg-gray-800 rounded-lg p-2 mb-4"><code class="language-jsx">
import { useEffect } from "react";
function App() {
  useEffect(() =&gt; {
    console.log("Component mounted!");
  }, []);
  return &lt;p&gt;Check console&lt;/p&gt;;
}
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">4. Props Example</h3>
<pre class="bg-gray-800 rounded-lg p-2 mb-4"><code class="language-jsx">
function Welcome({ name }) {
  return &lt;h2&gt;Hello, {name}!&lt;/h2&gt;;
}
export default function App() {
  return &lt;Welcome name="Aman" /&gt;;
}
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">5. Conditional Rendering</h3>
<pre class="bg-gray-800 rounded-lg p-2 mb-4"><code class="language-jsx">
function User({ isLoggedIn }) {
  return isLoggedIn ? &lt;p&gt;Welcome back!&lt;/p&gt; : &lt;p&gt;Please login&lt;/p&gt;;
}
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">6. List Rendering</h3>
<pre class="bg-gray-800 rounded-lg p-2 mb-4"><code class="language-jsx">
const items = ["Apple", "Banana", "Orange"];
function ItemList() {
  return (
    &lt;ul&gt;
      {items.map((item, index) =&gt; (
        &lt;li key={index}&gt;{item}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">7. useRef Hook</h3>
<pre class="bg-gray-800 rounded-lg p-2 mb-4"><code class="language-jsx">
import { useRef } from "react";
function InputFocus() {
  const inputRef = useRef(null);
  const focusInput = () =&gt; inputRef.current.focus();
  return (
    &lt;div&gt;
      &lt;input ref={inputRef} type="text" /&gt;
      &lt;button onClick={focusInput}&gt;Focus Input&lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">8. Context API</h3>
<pre class="bg-gray-800 rounded-lg p-2 mb-4"><code class="language-jsx">
import { createContext, useContext } from "react";
const ThemeContext = createContext("light");
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return &lt;button&gt;{theme} mode&lt;/button&gt;;
}
export default function App() {
  return (
    &lt;ThemeContext.Provider value="dark"&gt;
      &lt;ThemedButton /&gt;
    &lt;/ThemeContext.Provider&gt;
  );
}
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">9. Custom Hook</h3>
<pre class="bg-gray-800 rounded-lg p-2 mb-4"><code class="language-jsx">
import { useState, useEffect } from "react";
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() =&gt; {
    const handleResize = () =&gt; setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () =&gt; window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">10. React Router Example</h3>
<pre class="bg-gray-800 rounded-lg p-2 mb-4"><code class="language-jsx">
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function Home() {
  return &lt;h2&gt;Home Page&lt;/h2&gt;;
}
function About() {
  return &lt;h2&gt;About Page&lt;/h2&gt;;
}
export default function App() {
  return (
    &lt;BrowserRouter&gt;
      &lt;nav&gt;
        &lt;Link to="/"&gt;Home&lt;/Link&gt; | &lt;Link to="/about"&gt;About&lt;/Link&gt;
      &lt;/nav&gt;
      &lt;Routes&gt;
        &lt;Route path="/" element={&lt;Home /&gt;} /&gt;
        &lt;Route path="/about" element={&lt;About /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  );
}
</code></pre>
