import React from 'react'
import './App.css';
import { Routes, Route} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';

import Footer from './Components/Footer/Footer';
import Hotel from './pages/Hotel/Hotel';
import HomePage from './pages/HomePage/HomePage';
import Tour from './pages/Tour/Tour';
import Weather from './pages/Weather/Weather';


export const App = () => {

  return (
    <>

    <Routes>
      <Route path="/" element = {<HomePage/>} ></Route>
      <Route path='/Hotel' element ={<Hotel/>}></Route>
      <Route path='/Tour' element={<Tour/>}></Route>
      <Route path='/Weather' element={<Weather/>}></Route>
    </Routes>
    </>
  )
}

export default App;
