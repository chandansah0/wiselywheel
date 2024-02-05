const express = require('express');
const router = express.Router();
const BikeModel = require('../models/bike');

router.get('/', async (req, res) => {
  try {
    const bikeFeatures = await BikeModel.find();
    res.json(bikeFeatures);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
