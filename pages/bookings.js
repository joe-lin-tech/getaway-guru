import React, { useState } from 'react'
import BookingsForm from '@/components/BookingsForm'
import AirbnbViewCard from '@/components/CardGrid'

function bookings() {
    return(
        <div>
            <BookingsForm />
            <AirbnbViewCard />
        </div>
    )
}

export default bookings