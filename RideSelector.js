import React, {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import Link from "next/link"

const RideSelector = (props) => {
  const [duration, setDuration ]= useState(0);
   
    const getDirections = (pickupCoordinates, dropoffCoordinates) => {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiYXNobGV5am9zZXBoIiwiYSI6ImNscnRoNHM2MDA2cm4yam14M2xyczV0Z2sifQ.fRVyBscuRSRy5BWswpfEaA",
            })
        )
        .then((response)=>{
            return response.json();
        }).then(data => {
            // console.log
            setDuration(data.routes[0].duration)
        })
    }
    useEffect(()=>{
      if(props.pickUpCoordinates && props.dropoffCoordinates){
          getDirections(props.pickupCoordinates, props.dropoffCoordinates)
      }

  }, [props.pickupCoordinates, props.dropoffCoordinates])

    return(
          <Wrapper>
          <Title>Choose a ride acc to no. of passengers and luggages</Title>
          <Carlist>
           <Car>
             <CarImg src="https://www.livemint.com/lm-img/img/2023/09/24/1600x900/Carpool_1695580987637_1695580987833.jpg"/>
             <CarDetails>
              <Service>
                 Car Pool
              </Service>
              <Time>
                5 mins away
              </Time>
             </CarDetails>
             <Price>
             {'$'+(duration/100*1).toFixed(2)}
              </Price>
           </Car>
           <Car>
             <CarImg src="https://www.shutterstock.com/image-vector/finger-presses-on-black-simple-260nw-1136336132.jpg"/>
             <CarDetails>
              <Link href="/Carsize">
              <Service>
                 Reserve Car
              </Service>
              </Link>
              <Time>
                5 mins away
              </Time>
             </CarDetails>
             <Price>
                {'$'+(duration/100*2.5).toFixed(2)}
              </Price>
           </Car>
          </Carlist>
          </Wrapper>
    )
}

export default RideSelector

const Wrapper=tw.div`
flex-1 overflow-y-scroll flex flex-col
`
const Title=tw.div`
text-gray-500 text-center text-xs py-2 border-b
`
const Carlist=tw.div`
overflow-y-scroll
`
const Car=tw.div`
flex p-4 items-center
`
const CarImg=tw.img`
h-14 w-20 mr-4
`
const CarDetails=tw.div`
flex-1
`
const Service=tw.div`
font-medium transform hover:scale-105 transition
`
const Time=tw.div`
text-xs text-blue-500
`
const Price=tw.div`
text-sm
`