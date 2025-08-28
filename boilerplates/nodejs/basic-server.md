# Basic Node.js Server


A minimal Express server example.


```bash
npm init -y
npm install express
```

```bash
// index.js
const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello world'))
app.listen(3000, () => console.log('listening on 3000'))
```
