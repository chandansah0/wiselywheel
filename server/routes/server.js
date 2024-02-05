// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const BikeFeature = require('./models/Bike_Feature'); // Assuming you have a BikeFeature model

// Create an Express router
const router = express.Router();

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/WiselyWheel', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

// Define a route to fetch bike features from the database
router.get('/api/bike_features', async (req, res) => {
  try {
    // Fetch all bike features from the Bike_features collection
    const bikeFeatures = await BikeFeature.find();
    // Send the bike features as a JSON response
    res.json(bikeFeatures);
  } catch (err) {
   
    res.status(500).json({ message: err.message });
  }
});

// Export the router to be used in the main application file
module.exports = router;
