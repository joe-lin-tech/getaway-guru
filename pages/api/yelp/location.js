const axios = require('axios');

export default function handler(req, res) {
  const apiKey = process.env.YELP_API;
  const { id } = req.body;
  console.log(id, "HI")

  const url = 'https://api.yelp.com/v3/businesses/' + id;
  const headers = {
    'Authorization': `Bearer ${apiKey}`
  };

  axios.get(url, { headers })
    .then(response => {
      console.log(response.data);
      return res.status(200).json(response.data);
    })
    .catch(error => {
      console.error("ERROR: ", error);
    });
}
