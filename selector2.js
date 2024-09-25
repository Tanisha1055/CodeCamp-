import React,{useState} from 'react'
import tw from "tailwind-styled-components"
import Link from "next/link"

const Selector2= () =>{
    return(<Wrapper>
        <Title>Choose a ride, or swipe up for more</Title>
        <CarList2>
            { CarList2.map((car, index)=>(
                <Link href="/final2">
                <Car
                key={index}
                >
                    <CarImage src={car.imgUrl} />
                    <CarDetails>
                        <Service>{car.service}</Service>
                        <Time>{car.time} min away</Time>
                    </CarDetails>
                    <CarDetails1>
                    <Price>{car.price}</Price>
                    <Star src='https://img.icons8.com/windows/50/000000/square-full.png' />
                    <Rating>{car.rating}</Rating>
                    </CarDetails1>
                </Car>
                 </Link>
        )) }
        </CarList2>
    </Wrapper>)

};

export default Selector2


const Price = tw.div`
text-sm text-white
`

const Time = tw.div`
text-xs text-white
`
const Star = tw.div`
h-14 mr-4
`

const Service = tw.div`
font-medium
`
const Rating = tw.div`
font-medium text-white
`

const CarDetails = tw.div`
flex-1 text-white
`
const CarDetails1 = tw.div`
flex-1 flex space-x-10  flex justify-end
`

const CarImage = tw.img`
h-14 mr-4
`

const Car = tw.div`
flex items-center p-4 border-solid border-4 bg-purple-700
`

const CarList2 = tw.div`
flex-1  overflow-y-scroll bg-orange-950
`

const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`

const Wrapper = tw.div`
flex flex-col overflow-y-scroll
`

