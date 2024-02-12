const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

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

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/admin', (req, res) => {
  res.render('admin');
});

app.get('/compare', (req, res) => {
  res.render('Comparebike');
});

app.get('/api/bikefeatures', async (req, res) => {
  try {
    const searchTerm = req.query.term; // Extract search term from query string

    let query = {}; // Define an empty query object

    // If search term exists, add a regular expression to match variant_name
    if (searchTerm) {
      query = { variant_name: new RegExp(searchTerm, 'i') };
    }

    // Use the query object to search for bikes
    const bikes = await BikeModel.find(query);
    res.json(bikes);
  } catch (error) {
    console.error('Error fetching bike options:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
