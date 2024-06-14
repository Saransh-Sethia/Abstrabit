import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Piechart from '../PieChart/Piechart';

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
      <Piechart />
    </div>
  )
}

export default Dashboard
