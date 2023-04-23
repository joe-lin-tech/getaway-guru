import React, { useState } from 'react';
import { useSession, useEffect, getSession } from "next-auth/react"
import { Card } from './Card'

const History = (props) => {
        const { data: session, status } = useSession()
        const [trips, setTrips] = useState([]);
        


        return (
                <div class="mb-10 sm:mb-0 mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        { trips.map((t) => {
                                <Card name={ t.name } city={ t.city } numberOfLikes= { t.numberOfLikes } /> 
                        })
                }
                </div>
        )
}

const getUser = async (setTrips, session) => {
        let user;
        let trips;
        console.log("hi");
        await fetch(`http://localhost:3000/api/users/getTripsByEmail`, {
                method: "GET",
                headers: {
                        "Content-Type": "application/json",
                },
                body: JSON.stringify({
                        email: session.user.email
                })
        }).then(async (res) => {
                const result = await res.json();
                console.log(result + "from result");
                trips = result.user.createdTrips;
                
                trips.map((t) => {
                        getTrips(t, (r) => setTrips((prevState) => [...prevState, r]))
                })
                
        }).catch((err) => {
                console.log(err);
        })
}

const getTrips = async (tid, setTrips) => {
        let trip;
        console.log("hi in getTrips");
        await fetch(`http://localhost:3000/api/trips/getTrip`, {
                method: "GET",
                headers: {
                        "Content-Type": "application/json",
                },
                body: JSON.stringify({
                        id: tid
                })
        }).then(async (res) => {
                const result = await res.json();
                console.log(result + "from result");
                trips = result.trip;
                setTrips(result);

        }).catch((err) => {
                console.log(err);
        })
}





export default History;