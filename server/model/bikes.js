const mongoose = require('mongoose');

const bikefeatureSchema = new mongoose.Schema({
  _id: String,
  name: String,
  brand: String,
  price: Number,
  max_power: Number,
  max_torque: Number,
  cooling_system: String,
  transmission: String,
  transmission_type: String,
  displacement: Number,
  cylinders: Number,
  bore: Number,
  stroke: Number,
  valves_per_cylinder: Number,
  spark_plugs: String,
  gear_shifting_pattern: String,
  clutch: String,
  fuel_tank_capacity: Number,
  mileage: String,
  top_speed: Number,
  braking_system: String,
  front_brake_type: String,
  front_brake_size: Number,
  rear_tyre_size: String,
  tyre_type: String,
  radial_tyres: String,
  rear_brake_type: String,
  rear_brake_size: Number,
  wheel_type: String,
  front_wheel_size: Number,
  rear_wheel_size: Number,
  front_tyre_size: String,
  front_tyre_pressure_rider: Number,
  rear_tyre_pressure_rider: Number,
  front_tyre_pressure_rider_pillion: Number,
  rear_tyre_pressure_rider_pillion: Number,
  kerb_weight: Number,
  overall_length: Number,
  overall_width: Number,
  wheelbase: Number,
  ground_clearance: Number,
  seat_height: Number,
  overall_height: Number,
  chassis_type: String
});

const BikeFeature = mongoose.model('BikeFeature', bikefeatureSchema);

module.exports = BikeFeature;
