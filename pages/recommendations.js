const Recommendations = () => {
  const successCallback = async (position) => {
    const params = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      term: 'food'
    }
    const response = await fetch(`/api/yelp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params)
    }).then((res) => {
      console.log(res.json());
    }).catch((err) => {
      console.log(err);
    })
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  return (
    <a onClick={() => navigator.geolocation.getCurrentPosition(successCallback, errorCallback)}>DO STUFF</a>
  )
}

export default Recommendations;