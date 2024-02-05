const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

const bikeRoutes = require('./routes/bikes');

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/WiselyWheel', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

app.use('/api/bike_features', bikeRoutes);

app.get('/', (req, res) => {
  res.render('index');
});
// app.use(express.static('wiselywheel/server/public'));


app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
