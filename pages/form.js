import React, { useState } from 'react'


function form() {
    const [location, setLocation] = useState();
    const [checkin, setCheckin] = useState();
    const [checkout, setCheckout] = useState();

    const handleSubmit = (event) => {
        
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

export default form