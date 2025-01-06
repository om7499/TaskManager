import React, { useEffect, useState } from 'react'

const Quets = () => {
    const [quoat,setquote] = useState("Dream big and dare to fail. – Norman Vaughan");

     // List of motivational quotes
  const quotesList = [
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "Don’t be afraid to give up the good to go for the great. – John D. Rockefeller",
    "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
    "Opportunities don't happen, you create them. – Chris Grosser",
    "Work like there is someone working 24 hours a day to take it away from you. – Mark Cuban",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "Success seems to be connected with action. Successful people keep moving. – Conrad Hilton",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "Dream big and dare to fail. – Norman Vaughan",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe"
  ];

   useEffect(()=>{
    const randemQuete = quotesList[Math.floor(Math.random() * quotesList.length)]
    setquote(randemQuete);
   },[])

  return (
    <div className='quote-container container text-center'>
        <h1> Quotes</h1>
      <h4 className='text-center'>{quoat} </h4>
    </div>
  )
}

export default Quets
