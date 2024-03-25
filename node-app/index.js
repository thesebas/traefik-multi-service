const express = require('express')
const app = express()
const port = 3000

app.get('/about/', (req, res) => {
  res.send('this is about page!')
})

app.get('/', (req, res) => {
    res.send('Hello express-js World!, go to <a href="about">ABOUT</a>')
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})