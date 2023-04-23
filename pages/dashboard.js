import Link from 'next/link'
import { useSession, getSession } from "next-auth/react"
import { redirect } from 'next/navigation';
import ReactTypingEffect from 'react-typing-effect';
import History from '@/components/History'
import Card from '@/components/Card'
import { useState, useEffect } from "react"
import { waitUntilSymbol } from 'next/dist/server/web/spec-extension/fetch-event';


const Dashboard = () => {
  const { data: session, status } = useSession()
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    console.log("hi2");
    getUser(setTrips, session);
    console.log(trips);
  }, [])
  
  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    redirect('/auth')
  }
  

  return (
    <>
      <div class="bg-white w-full">
        <div
          className="absolute -z-10 h-full w-full backdrop-filter bg-[url('/dashboard.jpg')] bg-cover"
          aria-hidden="true"
        >
        {/* <img
        src="/hero.jpeg"
        alt=""
        className="inset-0 -z-10 h-full w-full object-cover"
        /> */}
        
  <div class="bg-gray-300 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 sm:p-6 sm:rounded-2xl opacity-90">
    <div class="bg-gray-700 px-2 lg:px-4 py-2 lg:py-10 sm:rounded-xl flex lg:flex-col justify-between">
      <nav class="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
        <Link href="/" className="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover">
        
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </Link>
        <a class="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
          </svg>
        </a>
      </nav>
      <div class="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
        <a class="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
          </svg>
        </a>
        <Link href="/" class="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
    {/* <!-- Content --> */}
    <div class="flex-1 px-2 sm:px-0">
      <div class="flex justify-between items-center">
        <div className="flex-col justify-start">
        {/*<h3 class="text-4xl font-bold text-black font-mono">Welcome back, {session.user.name}!</h3> */}
                <ReactTypingEffect
                  text={["Welcome back, " + session.user.name + "!"]}
                  eraseDelay={60000}
                  cursorRenderer={cursor => <h1 className="text-4xl font-bold text-black font-mono">{cursor}</h1>}
                  displayTextRenderer={(text, i) => {
                    return (
                      <h1 className="text-4xl font-bold text-black font-mono">
                        {text.split('').map((char, i) => {
                          const key = `${i}`;
                          return (
                            <span
                              key={key}

                            >{char}</span>
                          );
                        })}
                      </h1>
                    );
                  }}
                />
        <h4 class="text-3xl font-normal text-black font-mono">Liked Trips</h4>
        </div>
        <div class="inline-flex items-center space-x-2">
          <a class="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </a>
          <a class="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </a>
        </div>
      </div>
                  
            <div class="mb-10 sm:mb-0 mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {/*{trips.map((t) => {
                <Card name={t.name} city={t.city} numberOfLikes={t.numberOfLikes} />
              })
              }*/}
              <Card name="First trip!" city="Los Angeles" numberOfLikes={ 100 } src="./LA.jpg"/>
              <Card name="Europe trip" city="Rome" numberOfLikes={74} src="./Rome.jpg" />
              <Card name="Asia Trip" city="Tokyo" numberOfLikes={ 81 } src="./Tokyo.jpg" />
              <Card name="Touring the World" city="Vancouver" numberOfLikes={ 123 } src="./Vancouver.jpg" />
              <Card name="Sahara Desert Trip" city="Dunes" numberOfLikes={90} src="./Dunes.jpg" />
              <Card name="Guess the Location" city="???" numberOfLikes={43} src="./Mystery.jpg" />
              <Card name="USA" city="New York City" numberOfLikes={75} src="./NYC.jpg" />
              <Card name="Space" city="Moon" numberOfLikes={230} src="./Moon.jpg" />
              </div>
    </div>
  </div>
  </div>
</div>
</>
)

}

const getUser = async (setTrips, session) => {
  let user;
  let trips;
  console.log("hi");
  console.log(session.user.name);
  await fetch(`http://localhost:3000/api/users/getTripsByEmail`, {
    method: "POST",
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
    console.log(trips);

    trips.map((t) => {
      getTrips(t, (r) => setTrips((prevState) => [...prevState, r]))
    })

  }).catch((err) => {
    console.log(err);
  })
}

const getTrips = async (tid, setTrips) => {
  console.log("hi in getTrips");
  await fetch(`http://localhost:3000/api/trips/getTrip`, {
    method: "POST",
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


export default Dashboard