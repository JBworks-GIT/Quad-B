require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const tickerRoutes = require('./routes/tickerRoutes');
const { fetchDataAndStore } = require('./controller/tickerController');

const app = express();
const port = process.env.PORT;

const mongoURI = 'mongodb+srv://<username>:<password>@cluster0.ynfgwko.mongodb.net/wazirx?retryWrites=true&w=majority&appName=Cluster0'; 

let dbUrl = mongoURI.replace("<username>",process.env.USERNAME);
dbUrl = dbUrl.replace("<password>",process.env.PASSWORD);

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, 
  socketTimeoutMS: 45000, 
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

app.use('/', tickerRoutes);

fetchDataAndStore().then(() => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});
