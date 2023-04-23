import React, { useState } from 'react'
import BookingsForm from '@/components/BookingsForm'
import AirbnbGrid from '@/components/AirbnbGrid'

function bookings() {
    const [roomInfo, setRoomInfo] = useState();

    return(
        <div>
            <BookingsForm setRoomInfo={setRoomInfo} />
            <AirbnbGrid roomInfo={roomInfo} />
        </div>
    )
}

export default bookings