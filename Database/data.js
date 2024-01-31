const express = require('express');
const app = express();
const mongoose = require('mongoose');
port = 5501;

DB_URL = 'mongodb://0.0.0.0/octa';

mongoose.connect(DB_URL);
const conn = mongoose.connection;

conn.once('open',() => {
    console.log('successfully database connected');
})
