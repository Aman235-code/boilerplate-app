<h1 class="text-white text-2xl font-bold text-center">Express + PostgreSQL Setup</h1>
<p class="text-white text-center">Organize your project with a clean folder structure and PostgreSQL connection 🚀</p>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">Project Structure</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-bash">
my-express-postgres/
├── node_modules/
├── config/
│   └── db.js
├── models/
│   └── userModel.js
├── routes/
│   └── index.js
├── controllers/
│   └── userController.js
├── app.js
├── package.json
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">Install Dependencies</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-bash">
npm init -y
npm install express cors pg
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">config/db.js</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-js">
// config/db.js
const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'myapp',
  password: 'yourpassword',
  port: 5432,
})

module.exports = pool
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">models/userModel.js</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-js">
// models/userModel.js
const pool = require('../config/db')

const createUser = async (name, email) => {
  const result = await pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [name, email]
  )
  return result.rows[0]
}

const getUsers = async () => {
  const result = await pool.query('SELECT * FROM users')
  return result.rows
}

module.exports = { createUser, getUsers }
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">controllers/userController.js</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-js">
// controllers/userController.js
const { createUser, getUsers } = require('../models/userModel')

const addUser = async (req, res) => {
  try {
    const { name, email } = req.body
    const user = await createUser(name, email)
    res.status(201).json(user)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const fetchUsers = async (req, res) => {
  try {
    const users = await getUsers()
    res.json(users)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = { addUser, fetchUsers }
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">routes/index.js</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-js">
// routes/index.js
const express = require('express')
const { addUser, fetchUsers } = require('../controllers/userController')

const router = express.Router()

router.post('/users', addUser)
router.get('/users', fetchUsers)

module.exports = router
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">app.js</h3>

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
app.use('/api', routes)

app.listen(3000, () => console.log('🚀 Server running on http://localhost:3000'))
</code></pre>
