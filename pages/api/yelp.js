const axios = require('axios');

export default function handler(req, res) {
    const apiKey = process.env.YELP_API;
    const url = 'https://api.yelp.com/v3/businesses/search';
    const headers = {
    'Authorization': `Bearer ${apiKey}`
    };
    const params = {
    location: 'Los Angeles',
    term: 'food'
    };

    axios.get(url, { headers, params })
    .then(response => {
        console.log(response.data);
        return res.status(200).json({
            message: response.data
        });
    })
    .catch(error => {
        console.error(error);
    });
}

