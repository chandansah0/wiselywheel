const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const bikeRoutes = require('./routes/bikes');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());

app.use(cors());

mongoose.connect('mongodb://localhost:27017/WiselyWheel', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

app.use('/api/bikefeatures', bikeRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/admin', (req, res) => {
  res.render('admin');
});
app.get('/admin/filterResults', (req, res) => {
  const filterField = req.query.filterField;
  const filterValue = req.query.filterValue;

  
  res.render('filteredResults', { filterField, filterValue, /* Add filtered data here */ });
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
