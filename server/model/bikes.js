const mongoose = require('mongoose');

const bikefeatureSchema = new mongoose.Schema({
  brand: String,
  variant_name: String,
  price: Number,
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

const BikeFeature = mongoose.model('BikeFeature', bikefeatureSchema);

module.exports = BikeFeature;
