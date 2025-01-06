import { useState,useEffect } from 'react'
import React from 'react'
import Confetti from "react-confetti"
import Header from './Header'
import Quets from './Quets'
const CountDownTimer = () => {
let targetedTime = new Date("2025-01-01T00:00:00")


// calculate the time left for Event
let calculateTimeleft = ()=>{
    let now = new Date()
    let remaningTime = targetedTime - now
    //console.log(remaningTime)

    // checking the wheter time reach
    if(remaningTime <= 0){
        return{hours:0,min:0,sec:0}
    }

    // converting the time into readable formate
    let hours = Math.floor(remaningTime/(1000*60*60) % 24);
    let min = Math.floor(remaningTime/(1000*60) % 60);
    let sec = Math.floor(remaningTime/(1000) % 60);
    //console.log(hours,min,sec)

    return {hours, min ,sec}
}

// useState holding data 
let [timeleft ,settimeleft] = useState(calculateTimeleft());
let [shoconfitti, setConfitti] = useState(false)
let [isNewFest , setNewFest] = useState(false)

 // useEffeect for handling the uiupdate(sideeEffects)
 useEffect(()=>{
  if(timeleft.hours== 0 && timeleft.min==0 && timeleft.sec == 0){
     setConfitti(true);
     setNewFest(true)

     // remove confetti after 10 min
   let confittiremove = setTimeout(()=>{
    setConfitti(false);

   },10 * 60 * 1000);

    // clenup
    return ()=>{clearTimeout(confittiremove)}
  }

   

    // updating the Every second
    let timer = setTimeout(()=>{
     settimeleft(calculateTimeleft())
    },1000)

    return ()=>clearTimeout(timer);

 },[timeleft]);

  return (
    <div className='CountDown-Timer '>
      <Header isNewFest = {isNewFest} timeleft={timeleft} />
     {/* {shoconfitti && <Confetti/>} short-circuting for conditinal rendering */}
    </div>
  )
}

export default CountDownTimer
