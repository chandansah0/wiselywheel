const express = require('express');
const router = express.Router();
const BikeModel = require('../model/bikes');

router.get('/searchByFeature', async (req, res) => {
  try {
    const { feature } = req.query;
    const regex = new RegExp(feature, 'i');
    const searchResults = await BikeModel.find({
      $or: [
        { variant_name: regex },
        { engine_type: regex },
        { displacement: regex },
        { max_torque: regex },
        { cooling_system: regex }
      ]
    });
    res.json(searchResults);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const bikeFeatures = await BikeModel.find();
    res.json(bikeFeatures);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
