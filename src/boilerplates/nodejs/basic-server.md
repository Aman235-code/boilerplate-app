<h1 class="text-white text-2xl font-bold text-center">Basic Node.js Server</h2>
<p class="text-white text-center">A minimal Express server example.</p>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">Install dependencies</h3>

<p class="text-white mb-2"> 1. Initialize npm project</p>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-bash">npm init -y</code></pre>

<p class="text-white mb-2">2. Install express</p>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-bash">npm install express</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">Server code (index.js)</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-bash">
// index.js
const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello world'))
app.listen(3000, () => console.log('listening on 3000'))</code></pre>

<hr class="my-4 border-gray-600"/>

<h2 class="text-white text-2xl font-bold mt-6 mb-2 text-center">Adding Middleware</h2>

<p class="text-white text-center mb-4">Use middleware to handle JSON requests and logging.</p>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">Install Middleware</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-bash">npm install morgan body-parser</code></pre>

<h3 class="text-white font-semibold mb-2">Middleware Example</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-bash">// index.jsconst morgan = require('morgan')
const bodyParser = require('body-parser')
app.use(morgan('dev'))
app.use(bodyParser.json())</code></pre>

<hr class="my-4 border-gray-600"/>

<h2 class="text-white text-2xl font-bold mt-6 mb-2 text-center">Routing Example</h2>
<p class="text-white text-center mb-4">Create multiple routes for your application.</p>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">Example Routes</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-bash">
// index.js
app.get('/about', (req, res) => res.send('About page'))
app.get('/contact', (req, res) => res.send('Contact page'))
</code></pre>

<hr class="my-4 border-gray-600"/>

<h2 class="text-white text-2xl font-bold mt-6 mb-2 text-center">Error Handling</h2>
<p class="text-white text-center mb-4">Add basic error handling middleware.</p>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">Example</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-bash">
// index.js
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
</code></pre>
