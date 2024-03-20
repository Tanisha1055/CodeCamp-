import {useEffect,useState} from 'react'
import tw from "tailwind-styled-components"
import Link from "next/link"
import Map from './components/Map'
import {useRouter} from 'next/router'
import RideSelector from './components/RideSelector'
import { accessToken } from 'mapbox-gl'


const Confirm = () => {


    const router= useRouter()
    const {pickup,dropoff} = router.query




    const [pickupCoordinates,SetPickupCoordinates] = useState([0,0])
    const [dropoffCoordinates,SetDropOffCoordinates] = useState([0,0])
    const getPickUpCoordinates = (pickup) =>{
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
        new URLSearchParams({
            access_token:"pk.eyJ1IjoiYXNobGV5am9zZXBoIiwiYSI6ImNscnRoNHM2MDA2cm4yam14M2xyczV0Z2sifQ.fRVyBscuRSRy5BWswpfEaA",
            limit:1
        })
        )
        .then(response=>response.json())
        .then(data=>{
            console.log("Pickup")
            SetPickupCoordinates(data.features[0].center)
        })
    }
    const getDropOffCoordinnates = (dropoff) =>{
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+
        new URLSearchParams({
            access_token:"pk.eyJ1IjoiYXNobGV5am9zZXBoIiwiYSI6ImNscnRoNHM2MDA2cm4yam14M2xyczV0Z2sifQ.fRVyBscuRSRy5BWswpfEaA",
            limit:1
        })
        )
        .then(response=>response.json())
        .then(data=>{
            console.log("Dropoff")
            SetDropOffCoordinates(data.features[0].center)
        })
    }
    useEffect(() =>{
        getPickUpCoordinates(pickup)
        getDropOffCoordinnates(dropoff)
    },[pickup,dropoff] )
    return(
        <Wrapper>
        <ButtonContainer>
            <Link href="/search">
            <BackButton src= "https://img.icons8.com/ios-filled/50/000000/left.png"/>
            </Link>
        </ButtonContainer>
         <Map
         pickupCoordinates={pickupCoordinates}
         dropoffCoordinates={dropoffCoordinates}
          />
         <RideContainer>
         <RideSelector/>
         pickupCoordinates={pickupCoordinates}
         dropoffCoordinates={dropoffCoordinates}
         <ConfirmButtonContainer>
            <ConfirmButton>
            Confirm Car
            </ConfirmButton>
         </ConfirmButtonContainer>
         </RideContainer>
        </Wrapper>
    )
}


export default Confirm


const Wrapper=tw.div`
flex h-screen flex-col
`
const RideContainer=tw.div`
flex-1 flex flex-col h-1/2
`
const ConfirmButtonContainer=tw.div`
border-t-2
`
const ConfirmButton=tw.div`
bg-black text-white text-center my-4 mx-4 py-4 text-xl
`
const ButtonContainer=tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`
const BackButton=tw.img`
h-full  object-contain
`

