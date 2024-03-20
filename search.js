import {useState} from 'react'
import tw from "tailwind-styled-components"
import Link from "next/link"
const  Search  = () => {

    const [pickup,setPickup]=useState("")
    const [dropoff,setDropoff]=useState("")
    

    return(
        <Wrapper>
            <ButtonContainer>
              <Link href="/">
              <BackButton src= "https://img.icons8.com/ios-filled/50/000000/left.png"/>
              </Link>
            </ButtonContainer>
            <InputContainer>
            <FromToIcons>
             <Circle src="https://png.pngtree.com/png-clipart/20201029/ourmid/pngtree-circle-clipart-light-gray-round-png-image_2381992.jpg"/>
             <Line src="https://t3.ftcdn.net/jpg/03/63/34/70/360_F_363347020_YzZc2x3LI8fTfVXvGVPTXTrkOAJ1MR4l.jpg"/>
             <Square src="https://upload.wikimedia.org/wikipedia/commons/9/99/Black_square.jpg"/>
            </FromToIcons>
            <InputBoxes>
              <Input 
              placeholder="Enter pickup location"
              value={pickup}
              onChange={(e)=>setPickup(e.target.value)}
              />
              <Input 
              placeholder="Where to?"
              value={dropoff}
              onChange={(e)=>setDropoff(e.target.value)}
              />
            </InputBoxes>
            <PlusIcon src="https://www.shutterstock.com/image-illustration/plus-sign-icon-element-web-260nw-1098707264.jpg"/>
            </InputContainer>
            <SavedPlaces>
                <StarIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Whitestar_black.svg/2148px-Whitestar_black.svg.png"/>
                Saved Places
            </SavedPlaces>
            <Link href={{
                pathname:"/confirm",
                query:{
                    pickup:pickup,
                    dropoff:dropoff
                }
            }}>
            <ConfirmButton>
                Confirm Location
            </ConfirmButton>
            </Link>
        </Wrapper>
    )
}

export default Search
 
const Wrapper=tw.div`
bg-grey-200 h-screen
`
const ButtonContainer=tw.div`
bg-white px-4
`
const BackButton=tw.img`
h-12 cursor-pointer
`
const InputContainer=tw.div`
bg-white flex items-center px-4
`
const FromToIcons=tw.div`
w-10 flex flex-col  mr-2 items-center py-1
`
const Circle=tw.img`
h-2.5
`
const Line=tw.img`
h-10
`
const Square=tw.img`
h-3
`
const InputBoxes=tw.div`
flex flex-col flex-1 mb-2
`
const Input=tw.input`
h-10 bg-grey-200 my-2 rounded-2 p-2 outline-none border-none
`
const PlusIcon=tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3
`
const SavedPlaces=tw.div`
flex items-center bg-white px-4 py-2
`
const StarIcon=tw.img`
bg-grey-400 w-10 h-10 p-2 rounded-full mr-2
`
const ConfirmButton=tw.div`
bg-blue-200 my-2 mx-4 px-4 py-3 text-center transform hover:scale-105 transition text-2xl cursor-pointer
`