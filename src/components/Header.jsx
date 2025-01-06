import React, { useEffect, useState } from 'react'

const Header = ({isNewFest,timeleft}) => {
    let [curentword,setcurrentword] = useState("Wonderful")
    const words = [
        "Stunning",
        "Magnificent",
        "Majestic",
        "Gorgeous",
        "Amazing",
        "Spectacular",
        "Astonishing",
        "Fabulous",
        "Breathtaking",
        "Impressive",
        "Exquisite",
        "Radiant",
        "Wonderful",
        "Phenomenal",
        "Enchanting",
        "Superb",
        "Dazzling",
        "Remarkable",
        "Glorious",
        "Sublime"
      ];
      // useffect for updating the words after evry second
useEffect(()=>{
    let wordChange = setInterval(()=>{
        setcurrentword(prev =>{
            let curreIndex=words.indexOf(prev)
            console.log(curreIndex);
            return words[(curreIndex+1) % words.length]
        })
    },1000)

    //cleanup
    return ()=> clearInterval(wordChange)
},[])

  return (
   <>
    
    <div className='header-container  d-flex justify-content-between mx-5 align-items-center'>
      <div className='text-center p-4'>
      <h1 className='header-title text-center'> {isNewFest ? "Happy New Year 2025 🍾🍾" :"Advance Happy New Year 2025 🍾🍾" }</h1>
      <h3 className='text-center'>Make this Year <span className='text-primary'>{curentword} </span></h3>
      </div>

      <div className='timer-Section  border shadow-lg rounded-5 '>
         <h5 className='p-4 text-success '>
            {timeleft.hours<10 ? `0${timeleft.hours}`:timeleft.hours}:
            {timeleft.min<10 ? `0${timeleft.min}`:timeleft.min}:
            {timeleft.sec<10 ? `0${timeleft.sec}`:timeleft.sec}
         </h5>
      </div>
      
    </div>
    </>
  )
}

export default Header
