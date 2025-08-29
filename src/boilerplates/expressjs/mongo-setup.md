<h1 class="text-white text-2xl font-bold text-center">Express + MongoDB Setup</h1>
<p class="text-white text-center">Organize your project with a clean folder structure and MongoDB connection 🚀</p>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">Project Structure</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-bash">
my-express-mongo/
├── node_modules/
├── config/
│   └── db.js
├── models/
│   └── User.js
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
npm install express cors mongoose
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">config/db.js</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-js">
// config/db.js
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/myapp')
    console.log('✅ MongoDB connected')
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

module.exports = connectDB
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">models/User.js</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-js">
// models/User.js
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }
})

module.exports = mongoose.model('User', userSchema)
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">controllers/userController.js</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-js">
// controllers/userController.js
const User = require('../models/User')

const createUser = async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.status(201).json(user)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = { createUser, getUsers }
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">routes/index.js</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-js">
// routes/index.js
const express = require('express')
const { createUser, getUsers } = require('../controllers/userController')

const router = express.Router()

router.post('/users', createUser)
router.get('/users', getUsers)

module.exports = router
</code></pre>

<hr class="my-4 border-gray-600"/>

<h3 class="text-white font-semibold mb-2">app.js</h3>

<pre class="bg-gray-800 rounded-lg p-1 mb-4"><code class="language-js">
// app.js
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const routes = require('./routes/index')

const app = express()
connectDB()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api', routes)

app.listen(3000, () => console.log('🚀 Server running on http://localhost:3000'))
</code></pre>
