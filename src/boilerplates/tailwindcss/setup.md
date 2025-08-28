<h2 class="text-white text-2xl font-bold text-center">Install Tailwind on React Vite</h2>
<hr class="my-4 border-gray-600"/>
<h3 class="text-white font-semibold mb-2">Install this package first</h3>
<p class="text-white mb-2"> 1. Install tailwindcss </p>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-bash">npm install tailwindcss @tailwindcss/vite</code></pre>
<hr class="my-4 border-gray-600"/>
<p class="text-white mb-2">2. Add this code in your vite.config.js</p>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-bash">
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
plugins: [
tailwindcss(),
],
})</code></pre>
<hr class="my-4 border-gray-600"/>
<p class="text-white mb-2">3. Replace your index.css file with this line</p>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-bash">@import "tailwindcss";</code></pre>
<hr class="my-4 border-gray-600"/>
<p class="text-white mb-2">4. Add this line in meta tag of your index.html file</p>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-bash">&lt;link href=&quot;/src/style.css&quot; rel=&quot;stylesheet&quot;&gt;</code></pre>
