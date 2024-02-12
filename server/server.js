const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const axios = require('axios'); // Use axios instead of node-fetch for HTTP requests

const app = express();
const PORT = 3000;

const bikeRouter = require('./routes/bikes');
const BikeModel = require('./model/bikes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/WiselyWheel', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

app.use('/api/bikefeatures', bikeRouter);

// Proxy endpoint to forward requests to the external API
app.get('/api/external-bike-data', async (req, res) => {
  try {
    const { budget } = req.query;
    const response = await axios.get(`http://external-api-url/api/bikefeatures?budget=${budget}`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from external API:', error);
    res.status(500).json({ error: 'An error occurred while fetching data from external API' });
  }
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/admin', (req, res) => {
  res.render('admin');
});

app.get('/compare', (req, res) => {
  res.render('Comparebike');
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
