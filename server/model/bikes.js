const mongoose = require('mongoose');

const bikefeatureSchema = new mongoose.Schema({
  variant_name: String,
  price: Number,
  engine_type: String,
  displacement: String,
  max_torque: String,
  cooling_system: String,
  valve_per_cylinder: String,
  starting: String,
  fuel_supply: String,
  clutch: String,
  ignition: String,
  mileage: String,
  body_type: String,
  zero_to_100: String,
  peak_power: String,
  transmission: String,
  brand: String
});

const BikeFeature = mongoose.model('BikeFeature', bikefeatureSchema);

module.exports = BikeFeature;
