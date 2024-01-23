// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/data', (req, res) => {
  // Fetch data from the database or perform other backend logic
  const data = { message: 'Hello from the server!' };
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});
