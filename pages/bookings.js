import React, { useState } from 'react'

function bookings() {
    const successCallback = async (location, checkin, checkout) => {
        const params = {
            location: location,
            checkin: checkin,
            checkout: checkout,
        }
        const response = await fetch(`/api/airbnb`, {
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
    }

    const [location, setLocation] = useState();
    const [checkin, setCheckin] = useState();
    const [checkout, setCheckout] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted:', location, checkin, checkout);
        successCallback(location, checkin, checkout);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <label htmlFor="location" className="text-lg font-bold mb-2">
            Location:
            <input
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              style={{ color: 'black'}}
            />
          </label>
          <label htmlFor="checkin" className="text-lg font-bold mb-2">
            Checkin:
            <input
              type="date"
              value={checkin}
              onChange={(event) => setCheckin(event.target.value)}
              style={{ color: 'black'}}
            />
          </label>
          <label htmlFor="checkout" className="text-lg font-bold mb-2">
            Checkout:
            <input
              type="date"
              value={checkout}
              onChange={(event) => setCheckout(event.target.value)}
              style={{ color: 'black'}}
            />
          </label>
          <button type="submit" className="bg-green-500 text-white p-2 rounded">Submit</button>
        </form>
      );
}

export default bookings