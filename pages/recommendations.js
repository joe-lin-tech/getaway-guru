import { Wrapper, Status } from "@googlemaps/react-wrapper"
import Map from "@/components/Map"
import { useState, useEffect, Fragment } from "react"
import { CheckCircleIcon, CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Dialog, Listbox, Transition } from "@headlessui/react";
import Form from "@/components/form";

const categories = [
  {
    id: 1,
    name: 'Food',
  },
  {
    id: 2,
    name: 'Museum'
  },
  {
    id: 3,
    name: 'Night Life'
  },
  {
    id: 4,
    name: 'Nature'
  },
  {
    id: 5,
    name: 'Theater'
  },
  {
    id: 6,
    name: 'Events'
  }
]

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

const getData = async (position, setFoodPlaces) => {
  const params = {
    latitude: position.lat,
    longitude: position.lng,
    term: 'food'
  }
  await fetch(`/api/yelp/businesses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params)
  }).then(async (res) => {
    const result = await res.json();
    setFoodPlaces(result.businesses);
  }).catch((err) => {
    console.log(err);
  })
};

const PlacesCard = ({ index, place, dests, setDests }) => {
  return (
    <li className="relative">
      <div className="relative bg-white rounded-lg overflow-hidden">
        <div className={classNames(!dests.has(index) && "hidden", "absolute h-full w-full z-10 flex items-center justify-center bg-gray-300 bg-opacity-50")}>
          <CheckCircleIcon className="w-20 h-20 text-green-500" aria-hidden="true" />
        </div>
        <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden bg-gray-100">
          {/* <img src={place.image_url} alt="" className="pointer-events-none object-cover group-hover:opacity-75" /> */}
          <img src={place.image_url} alt="" className="pointer-events-none object-cover" />
          <button type="button" className="absolute inset-0 focus:outline-none z-20" onClick={() => {
            if (dests.has(index)) dests.delete(index)
            else dests.add(index)
            setDests(new Set(dests))
          }}>
            <span className="sr-only">View details for {place.name}</span>
          </button>
        </div>
        <div className="text-gray-900 my-4 px-4">
          <div className="grid grid-cols-3">
            <p className="col-span-2 font-bold text-md">{place.name}</p>
            <p className="col-span-1 text-right text-sm self-center">{place.rating} ⭐</p>
          </div>
          <p className="text-sm">{place.location.address1}</p>
          <p className="text-sm">{place.location.city}, {place.location.state} {place.location.zipcode}</p>
          <p className="text-sm">{place.phone}</p>
        </div>
      </div>
    </li>
  )
}

const Recommendations = () => {
  const [position, setPosition] = useState(undefined)
  const [places, setPlaces] = useState([])
  const [foodPlaces, setFoodPlaces] = useState([])
  const [foodDests, setFoodDests] = useState(new Set())
  const [selected, setSelected] = useState(categories[0])
  const [formOpen, setFormOpen] = useState(true)

  const render = (status) => {
    if (status == Status.FAILURE) return <div>Error</div>
    return <div>Loading</div>
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((p) => setPosition({ lat: p.coords.latitude, lng: p.coords.longitude }))
  }, [])

  useEffect(() => {
    setPlaces([...Array.from(foodDests).map((i) => foodPlaces[i])])
  }, [foodPlaces, foodDests])

  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS || !position) return <div></div>
  return (
    <div className="grid grid-cols-4 bg-gray-100">
      <Transition.Root show={formOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setFormOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:p-6">
                  <Form setFormOpen={setFormOpen}/>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="col-span-3 h-screen">
        <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS} render={render}>
          <Map location={{ lat: position.lat, lng: position.lng }} zoomLevel={13} places={places}></Map>
        </Wrapper>
      </div>
      <div className="flex flex-col p-5">
        <button
          type="button"
          className="rounded-md bg-indigo-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          onClick={() => getData(position, setFoodPlaces)}
        >
          Find recommendations!
        </button>
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900 mt-4">Select Category</Listbox.Label>
              <div className="relative mt-2">
                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <span className="block truncate">{selected.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-30 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {categories.map((c) => (
                      <Listbox.Option
                        key={c.id}
                        className={({ active }) =>
                          classNames(
                            active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-3 pr-9'
                          )
                        }
                        value={c}
                      >
                        {({ selected, active }) => (
                          <>
                            <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                              {c.name}
                            </span>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-indigo-600',
                                  'absolute inset-y-0 right-0 flex items-center pr-4'
                                )}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
        {foodPlaces.length > 0 && <ul role="list" className="grid grid-cols-1 gap-x-4 gap-y-8 mt-6 overflow-y-auto h-screen">
          {foodPlaces.map((p, i) => (
            <PlacesCard key={i} index={i} place={p} dests={foodDests} setDests={setFoodDests} />
          ))}
        </ul>}
      </div>
    </div>
  )
}

export default Recommendations;