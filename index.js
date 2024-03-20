import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import tw from "tailwind-styled-components"
import { useEffect,useState } from 'react'
import mapboxgl from "mapbox-gl";
import Link from "next/link"
import {auth} from '../firebase'
import { onAuthStateChanged,signOut } from "firebase/auth";
import {useRouter} from 'next/router'

mapboxgl.accessToken='pk.eyJ1IjoiYXNobGV5am9zZXBoIiwiYSI6ImNscnRoNHM2MDA2cm4yam14M2xyczV0Z2sifQ.fRVyBscuRSRy5BWswpfEaA'

export default function Home() {
  useEffect(() => {
    const map = new mapboxgl.Map({
       container: "map",
       style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
       center: [85.824539, 20.296059],
       zoom: 3,
     })
   })
   const [user,setUser]= useState(null)
   const router= useRouter()

   useEffect(()=>{
    return onAuthStateChanged(auth,user=>{
      if(user){
        setUser({
          name:user.displayName,
          photoUrl:user.photoURL,
        })
      }else{
        setUser(null)
        router.push('/login')
      }
    })
   },[])
  return (
    <Wrapper>
      <Map id="map"></Map>
      <ActionItems>
        <Header> 
          <Logo>
            Neoteric Drive
          </Logo>
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage
            src={user && user.photoUrl} onClick={()=>signOut(auth)}/>
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImg src="https://www.shutterstock.com/image-vector/realistic-vector-suv-white-color-260nw-2268805001.jpg"/>
                4 seat
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImg src="https://w0.peakpx.com/wallpaper/740/625/HD-wallpaper-awesome-pink-car-graphy-pink-car-awesome.jpg"/>
            Female reserve
          </ActionButton>
          <ActionButton>
          <ActionButtonImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDgZ-ppxVfsgYrTUgP1zIPNUxSKG328pWs-Q&usqp=CAU"/>
            Self-driving
          </ActionButton>
        </ActionButtons>
      </ActionItems>
      <InputButton>
      Where to?
      </InputButton>
    </Wrapper>
  );
}
const Wrapper=tw.div`
flex flex-col h-screen
`
const Map=tw.div`
bg-red-500 flex-1`

const ActionItems=tw.div`
bg-white-400 flex-1 p-2`

const Header=tw.div`
flex justify-between items-center
`
const Logo=tw.div`
 text-4xl md:font-bold text-blue-900`

const Profile=tw.div`
flex items-center
`
const Name=tw.div`
mr-4 w-20 text-sm
`

const UserImage=tw.img`
h-12 w-12 rounded-full border border-grey-200 p-px cursor-pointer
`
const ActionButtons=tw.div`
flex py-4 items-center px-4
`
const ActionButton=tw.div`
flex bg-grey-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`
const ActionButtonImg=tw.img`
h-3/5`

const InputButton=tw.div`
h-20 bd-grey-200 text-xl p-4 flex items-center mt-4`