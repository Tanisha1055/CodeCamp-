import React , {useEffect} from 'react'
import tw from "tailwind-styled-components"
import {useRouter} from 'next/router'
import { signInWithPopup,onAuthStateChanged } from 'firebase/auth'
import { auth,provider } from '../firebase'

const Login =()=>{
    const router= useRouter()

    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                router.push('/')
            }
        })
    },[])
    return(
        <Wrapper>
            <MainLogo>
            Neoteric Drive
            </MainLogo>
            <Tilte>
                Log In to Access Your Account
            </Tilte>
            <LoginImage src="https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2023/02/Uber-X-Share02-1024x351.png"/>
            <SignInButton onClick={()=>signInWithPopup(auth,provider)}>
                Sign in with Google
            </SignInButton>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
flex flex-col h-screen w-screen bg-grey-200 p-4
`
const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full 
`
const MainLogo=tw.div`
text-blue-800 h-1800 text-4xl md:font-bold
`
const Tilte=tw.div`
text-5xl pt-4 text-gray-500
`
const LoginImage=tw.img`
object-contain w-full
`