import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Piechart from '../PieChart/Piechart';
import SwiperComponent from '../Swiper/Swiper';
import './Dashboard.css'
import Bookings from '../Bookings/Bookings';

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openHandler = () => {
        setIsOpen(true);
    };

    const closeHandler = () => {
        setIsOpen(false);
    }
  return (
    <div>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} openHandler={openHandler} closeHandler={closeHandler} />
      <div className='grid-container'>
      <Piechart />
      <Bookings />
      <SwiperComponent />
      </div>
    </div>
  )
}

export default Dashboard
