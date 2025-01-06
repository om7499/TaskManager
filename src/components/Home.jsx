import React from 'react'

const Home = ({darkMode}) => {
  return (
    <div className={darkMode?"dark-mode" : "light-mode"}>
      <div className='row imageback'>
      <div className='p-5 col-lg-6 d-flex justify-content-center align-items-center'>
        <div className='p-5'>
        <h1 className=' fw-bolder text-center p-2'style={{background:"#b2ebf2"}}> Welcome Task Manager</h1>
        <p className='p-2 fs-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vel eos doloribus, atque magni eaque! Molestias sequi facere dolorem quia at corrupti officiis maiores numquam iusto commodi pariatur, repellat placeat.</p>
        <div className='p-2'><button className='btn btn-outline-primary fw-bold fs-4 '><a href="/start" className='btn-start'>Start Tasks</a></button></div>
        </div>
      </div>
      <div className='col-lg-6 d-flex justify-content-center p-4'>
        <div><img src="./src/assets/task1.avif" alt="" /></div>
      </div>
      </div>
    </div>
  )
}

export default Home
