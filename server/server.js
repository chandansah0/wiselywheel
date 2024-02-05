
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.

mongoose.connect('mongodb://localhost:27017/WiselyWheel', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));


const bikeFeatureSchema = new mongoose.Schema({
  variant_name: String,
  on_road_price: Number,
  engine_type: String,
  displacement: String,
  max_torque: String,
  cooling_system: String,
  valve_per_cylinder: Number,
  starting: String,
  fuel_supply: String,
  clutch: String,
  ignition: String,
  gear_box: String,
  bore: String,
  stroke: String,
  city_mileage: String,
  body_type: String,
  acceleration_time: String,
  peak_power: String,
  front_suspension: String,
  transmission: String,
  braking_system: String
});

const BikeFeature = mongoose.model('BikeFeature', bikeFeatureSchema);

app.get('/api/bike_features', async (req, res) => {

  try {
    const bikeFeatures = await BikeFeature.find();
    res.json(bikeFeatures);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.get('/', (req, res) => {
  res.render('index')
});


app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
