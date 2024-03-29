const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const axios = require('axios');

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

app.get('/browse', (req, res) => {
  res.render('Browsebike');
});
app.get('/compare', (req, res) => {
  res.render('Comparebike');
});




// Route for fetching bikes by brand
app.get('/api/bikefeatures/brand/:brandName', async (req, res) => {
  const brandName = req.params.brandName;
  try {
    // Query the database for bikes with the specified brand name
    const bikes = await BikeModel.find({ brand: brandName });
    res.json(bikes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




app.get('/bikeDetails', async (req, res) => {
  const bikeId = req.query.id;
  try {
    const bike = await BikeModel.findById(bikeId);
    if (!bike) {
      return res.status(404).json({ message: "Bike not found" });
    }

    res.render('bikeDetails', { bikes: [bike] });
  } catch (error) {

    res.status(500).json({ message: error.message });
  }
});

app.get('/api/bikefeatures/price', async (req, res) => {
  const minPrice = parseInt(req.query.minPrice) || 0;
  const maxPrice = parseInt(req.query.maxPrice) || Infinity;
  try {
   
    const bikes = await BikeModel.find({ price: { $gte: minPrice, $lte: maxPrice } });
    res.json(bikes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get('/searchResults', async (req, res) => {
  const searchTerm = req.query.searchTerm.toLowerCase();

  try {
    
    const filteredBikes = await BikeModel.find({
      $or: [
        { brand: { $regex: searchTerm, $options: 'i' } }, 
        { variant_name: { $regex: searchTerm, $options: 'i' } } 
      ]
    });

    res.render('searchResults', { searchResults: filteredBikes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));