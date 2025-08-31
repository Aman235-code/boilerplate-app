<h1 class="text-white text-2xl font-bold text-center">Basic Node.js Server</h1>
<p class="text-white text-center">A minimal Express server example.</p>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">Install dependencies</h3>

<p class="text-white mb-2">1. Initialize npm project</p>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-bash">npm init -y</code></pre>

<p class="text-white mb-2">2. Install Express and CORS</p>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-bash">npm install express cors</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">Server code (index.js)</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-js">

// index.js
const express = require('express')
const cors = require('cors')

const app = express()

// Middleware
app.use(cors())            // Enable CORS
app.use(express.json())    // Parse JSON requests

// Routes
app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/about', (req, res) => {
  res.send('About page')
})

app.get('/contact', (req, res) => {
  res.send('Contact page')
})

// Example POST route
app.post('/api/data', (req, res) => {
  const body = req.body
  res.json({ message: 'Data received', data: body })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// Start server
app.listen(3000, () => console.log('Server running on http://localhost:3000'))
</code></pre>

