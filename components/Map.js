import { useEffect, useRef, useState } from "react"

const Map = ({ location, zoomLevel, places }) => {
  const ref = useRef();
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center: location, zoom: zoomLevel }));
    }
    places.map((p) => {
      new google.maps.Marker({
        position: { lat: p.coordinates.latitude, lng: p.coordinates.longitude },
        map,
        title: "Hello World!",
        icon: "/duck.webp"
      });
    })
  }, [ref, map, location, zoomLevel, places]);
  return (
    <div className="h-full" ref={ref} />
  )
}

export default Map