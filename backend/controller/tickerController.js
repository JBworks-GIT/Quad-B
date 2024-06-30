const axios = require('axios');
const Ticker = require('../models/ticker');

const fetchDataAndStore = async () => {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const tickers = response.data;

    const top10Tickers = Object.keys(tickers)
      .slice(0, 10)
      .map((key) => tickers[key]);

    for (const ticker of top10Tickers) {
      const { name, last, buy, sell, volume, base_unit } = ticker;
      const newTicker = new Ticker({ name, last, buy, sell, volume, base_unit });
      await newTicker.save();
    }

    console.log('Data fetched and stored successfully.');
  } catch (error) {
    console.error('Error fetching or storing data:', error);
  }
};

const getTickers = async (req, res) => {
  try {
    const tickers = await Ticker.find({});
    res.json(tickers);
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  fetchDataAndStore,
  getTickers,
};
