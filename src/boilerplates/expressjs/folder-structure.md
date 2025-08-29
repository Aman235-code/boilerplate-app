<h1 class="text-white text-2xl font-bold text-center">Express App with Folder Structure</h1>
<p class="text-white text-center">Organize your Node.js project like a pro 🚀</p>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">Project Structure</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-bash">
my-express-app/
├── node_modules/
├── routes/
│   └── index.js
├── controllers/
│   └── mainController.js
├── app.js
├── package.json
|__ .gitignore (create this file and add node_modules)
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">Install Dependencies</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-bash">
npm init -y
npm install express cors
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">app.js (Entry Point)</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-js">
// app.js
const express = require('express')
const cors = require('cors')
const routes = require('./routes/index')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/', routes)

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// Start server
app.listen(3000, () => console.log('Server running on http://localhost:3000'))
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">routes/index.js</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-js">
// routes/index.js
const express = require('express')
const { home, about, contact, postData } = require('../controllers/mainController')

const router = express.Router()

router.get('/', home)
router.get('/about', about)
router.get('/contact', contact)
router.post('/api/data', postData)

module.exports = router
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">controllers/mainController.js</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-js">
// controllers/mainController.js

// GET /
const home = (req, res) => {
  res.send('Hello world from Controller!')
}

// GET /about
const about = (req, res) => {
  res.send('About page from Controller')
}

// GET /contact
const contact = (req, res) => {
  res.send('Contact page from Controller')
}

// POST /api/data
const postData = (req, res) => {
  const body = req.body
  res.json({ message: 'Data received!', data: body })
}

module.exports = { home, about, contact, postData }
</code></pre>
