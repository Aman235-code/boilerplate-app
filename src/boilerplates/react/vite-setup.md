<h1 class="text-white text-2xl font-bold text-center">React + Vite Setup</h1>
<p class="text-white text-center">A minimal guide to create a React app using Vite.</p>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">1. Create Project</h3>
<p class="text-white mb-2">Run the following command to create a new Vite project:</p>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-bash">npm create vite@latest my-app</code></pre>

<p class="text-white mb-2">Choose <strong>React</strong> → <strong>JavaScript</strong> when prompted.</p>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">2. Move into project folder</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-bash">cd my-app</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">3. Install dependencies</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-bash">npm install</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">4. Start the dev server</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-bash">npm run dev</code></pre>

<p class="text-white text-center mb-4">Open <a href="http://localhost:5173" class="text-blue-400 underline">http://localhost:5173</a> in your browser.</p>

<hr class="my-4 border-gray-600"/>

<h2 class="text-white text-2xl font-bold mt-6 mb-2 text-center">Basic React Files</h2>
<p class="text-white text-center mb-4">Replace default code with a simple app.</p>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">App.jsx</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-bash">
// src/App.jsx
import React from "react";
export default function App() {
  return (
    &lt;div classname="text-red-600 font-bold"&gt;
      &lt;h1&gt; Hello React ! &lt;/h1&gt;
      &lt;p&gt;This is a simple React app running on Vite.&lt;/p&gt;
    &lt;/div&gt;
  );
}
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">main.jsx</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-bash">
// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  &lt;React.StrictMode&gt;
    &lt;App /&gt;
  &lt;/React.StrictMode&gt;
);
</code></pre>

<hr class="my-4 border-gray-600"/>

<h2 class="text-white text-2xl font-bold mt-6 mb-2 text-center">Build for Production</h2>
<p class="text-white text-center mb-4">Generate optimized static files for deployment.</p>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-bash">npm run build</code></pre>

<hr class="my-4 border-gray-600"/>

<h2 class="text-white text-2xl font-bold mt-6 mb-2 text-center">Preview Build</h2>
<p class="text-white text-center mb-4">Preview your production build locally.</p>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-bash">npm run preview</code></pre>
