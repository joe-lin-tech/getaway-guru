const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://airbnb13.p.rapidapi.com/search-location',
  params: {
    location: 'Paris',
    checkin: '2023-09-16',
    checkout: '2023-09-17',
    adults: '1',
    children: '0',
    infants: '0',
    pets: '0',
    page: '1',
    currency: 'USD'
  },
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});