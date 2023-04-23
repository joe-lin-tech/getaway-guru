import { useEffect, useRef, useState } from "react"

const Map = ({ location, zoomLevel, markers }) => {
  const ref = useRef();
  const [map, setMap] = useState();
  const [directions, setDirections] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center: location, zoom: zoomLevel }));
    }
  }, [ref, map, location, zoomLevel]);

  useEffect(() => {
    for (let i = 0; i < markers.length; i++) markers[i].setMap(map)
    if (directions) directions.setMap(null)
    if (markers.length > 1) {
      const directionsService = new google.maps.DirectionsService();
      console.log(directions)
      const waypoints = []
      for (let j = 1; j < markers.length - 1; j++) waypoints.push({ location: markers[j].position })
      directionsService.route({
        origin: markers[0].position,
        destination: markers[markers.length - 1].position,
        travelMode: "DRIVING",
        waypoints: waypoints
      }, (res, status) => {
        if (status == "OK") {
          setDirections(new google.maps.DirectionsRenderer({
            suppressMarkers: true,
            directions: res,
            map: map,
            optimizeWaypoints: true
          }))
        }
      })
    }
    // places.map((p) => {
    //   new google.maps.Marker({
    //     position: { lat: p.coordinates.latitude, lng: p.coordinates.longitude },
    //     map,
    //     // title: "Hello World!",
    //     // icon: "/duck.webp"
    //   })
    // })
  }, [map, markers])

  return (
    <div className="h-full" ref={ref} />
  )
}

export default Map