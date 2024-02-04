const express = require('express')
const app = express()
app.set("view engine", "ejs")
app.get('/public/:username', function (req, res) {
  res.send(`Hello from ${req.parms.username}`)
});
app.get('/public', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)