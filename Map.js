import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken='pk.eyJ1IjoiYXNobGV5am9zZXBoIiwiYSI6ImNscnRoNHM2MDA2cm4yam14M2xyczV0Z2sifQ.fRVyBscuRSRy5BWswpfEaA'

const Map = (props) =>{
  useEffect(() => {
    const map = new mapboxgl.Map({
       container: "map",
       style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
       center: [85.824539, 20.296059],
       zoom: 3,
     })

     if(props.pickupCoordinates)
     addToMap(map,props.pickupCoordinates);

     if(props.dropoffCoordinates)
     addToMap(map,props.dropoffCoordinates);

     if(props.pickupCoordinates && props.dropoffCoordinates){
      map.fitBounds([
        props.pickupCoordinates,
        props.dropoffCoordinates
      ],{
        padding:80
      })
     }

    },[props.pickupCoordinates,props.dropoffCoordinates])

      const addToMap = (map,coordinates) =>{
        const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);
    }

   return <Wrapper id="map"></Wrapper>
}

export default Map

const Wrapper=tw.div`
flex-1 h-1/2
`