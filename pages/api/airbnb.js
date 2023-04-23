const axios = require("axios");

export default function handler(req, res) {
  const apiKey = process.env.AIRBNB_API;
  const { location, checkin, checkout } = req.body;
  const options = {
    method: 'GET',
    url: 'https://airbnb13.p.rapidapi.com/search-location',
    params: {
      location: `${location}`,
      checkin: `${checkin}`,
      checkout: `${checkout}`,
      adults: '1',
      children: '0',
      infants: '0',
      pets: '0',
      page: '1',
      currency: 'USD'
    },
    headers: {
      'X-RapidAPI-Key': `${apiKey}`,
      'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    return res.status(200).json({
      message: response.data
    });
  }).catch(function (error) {
    console.error(error);
  });
}