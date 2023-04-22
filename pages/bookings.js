import React, { useState } from 'react'
import BookingsForm from '@/components/BookingsForm'
import CardGrid from '@/components/CardGrid'

function bookings() {
    const [roomInfo, setRoomInfo] = useState();

    return(
        <div>
            <BookingsForm setRoomInfo={setRoomInfo} />
            <CardGrid roomInfo={roomInfo} />
        </div>
    )
}

export default bookings