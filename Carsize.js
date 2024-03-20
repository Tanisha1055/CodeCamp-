import React,{useState} from 'react'
import tw from "tailwind-styled-components"
import Link from "next/link"

const Carsize = () =>{
    const [isOpen, setIsOpen] = useState (false)
    const [selectValue,setSelectValue]= useState("4 seater")
    const UpdateValue = (value) =>{
        setSelectValue(value)
        isOpen(false)
 }
 return(
    <Wrapper>
      <ButtonContainer>
        <Link href="/RideSelector">
        <BackButton src= "https://img.icons8.com/ios-filled/50/000000/left.png"/>
        </Link>
      </ButtonContainer>
      <InputContainer>
        <div className='Select'>
            <div className='flex items-center justify-between child' onClick={()=>setIsOpen(!isOpen)}>
             <span>{selectValue}</span>
             <div className={isOpen?"rotate-180 transition":"rotate-0 transition"}></div>
             <ArrowDown/>
            </div>
            {isOpen && (
                <div>
                    <ul className="flex flex-col border-t divide-y">
                        <li className='child' onClick={()=>UpdateValue("4 seater")}>
                          4 seater
                          <Time>
                            5 mins away
                          </Time>
                        </li>
                        <Price>
                            {'$'+(duration/100*2.5).toFixed(2)}
                        </Price>
                        <li className='child' onClick={()=>UpdateValue("6 seater")}>
                        6 seater
                        <Time>
                            5 mins away
                          </Time>
                        </li>
                        <Price>
                            {'$'+(duration/100*5.5).toFixed(2)}
                        </Price>
                    </ul>
                </div>
            )
            }
        </div>
      </InputContainer>
    </Wrapper>
 )
}

export default Carsize

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
const Time=tw.div`
text-xs text-blue-500
`
const Price=tw.div`
text-sm
`