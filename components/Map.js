import { useEffect, useRef, useState } from "react"

const Map = ({ location, zoomLevel, markers }) => {
  const ref = useRef();
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center: location, zoom: zoomLevel }));
    }
  }, [ref, map, location, zoomLevel]);

  useEffect(() => {
    // for (let i = 0; i < markers.length; i++) markers[i].setMap(null)
    // setMarkers([]);
    // const directions = new google.maps.DirectionsService();
    // if (places.length > 1) {
    //   directions.route({
    //     origin: { lat: places[0].coordinates.latitude, lng: places[0].coordinates.longitude },
    //     destination: { lat: places[places.length - 1].coordinates.latitude, lng: places[places.length - 1].coordinates.longitude },
    //     travelMode: "DRIVING"
    //   }, (res, status) => {
    //     if (status == "OK") {
    //       new google.maps.DirectionsRenderer({
    //         suppressMarkers: true,
    //         directions: res,
    //         map: map
    //       })
    //     }
    //   })
    // }
    // places.map((p) => {
    //   new google.maps.Marker({
    //     position: { lat: p.coordinates.latitude, lng: p.coordinates.longitude },
    //     map,
    //     // title: "Hello World!",
    //     // icon: "/duck.webp"
    //   })
    // })
    console.log("MARKERS IN MAP", markers)
    for (let i = 0; i < markers.length; i++) markers[i].setMap(map)
    console.log("MAP EFFECT")
  }, [map, markers])

  return (
    <div className="h-full" ref={ref} />
  )
}

export default Map