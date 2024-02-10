const express = require('express');
const router = express.Router();

const BikeModel = require('../model/bikes');



router.get('/', async (req, res) => {
  try {
    let filter = {};
    if (req.query.variant_name) {
      filter.variant_name = { $regex: new RegExp(req.query.variant_name, 'i') };
    }
    const bikeFeatures = await BikeModel.find();
    res.json(bikeFeatures);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
