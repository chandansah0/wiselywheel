const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 5501;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mycontactform', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a mongoose schema for the form data
const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Create a mongoose model based on the schema
const FormData = mongoose.model('FormData', formDataSchema);

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, etc.)
app.use(express.static('public'));

// Handle form submission
app.post('/submit-form', async (req, res) => {
  try {
    // Create a new instance of the FormData model
    const formData = new FormData({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    // Save the form data to MongoDB
    await formData.save();

    res.send('Form submitted successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log('Server is running at http://127.0.0.1:5501/Frontend/contact.html');
});
