import { useEffect, useState } from 'react'
// import CountDownTimer from './components/CountDownTimer'
// import Quets from './components/Quets'
import TaskManagment from './components/TaskManagment'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { Toast } from 'bootstrap'

function App() {
  // for dark mode start --->
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("");
    return savedMode === "true"; // If value is saved, it will be a string "true"
  });

  // Step 2: Save darkMode to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode); // Save updated value in localStorage
  }, [darkMode]);

  // Toggle dark mode
  const toggleTheme = () => {
    setDarkMode(prev => !prev); // Switch between dark and light modes
    console.log(!prev)
  };
  // for dark mode end <---
   
  return (
    // <div>
   
    //  <TaskManagment/>
    // </div>
    <>
    <Router>
      <Navbar darkMode={darkMode} toggle={toggleTheme} />
      
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode}/>} />
        <Route path="/Task" element={<TaskManagment darkMode={darkMode}/>} />
        <Route path="/start" element={<TaskManagment darkMode={darkMode}/>} />

      </Routes>
      <Footer/>
    </Router> 
    </>
  )
}

export default App
