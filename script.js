
const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get('/profile/:username', (req, res) => {
//   res.send(`hello from ${req.params.username}`);
// })
// app.get(/.*fly$/, (req, res) => {
//   res.send('/.*fly$/')
// })
app.get('/example/b', (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from B!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
