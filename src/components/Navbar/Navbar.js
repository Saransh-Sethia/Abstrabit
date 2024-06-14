import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = ({openHandler}) => {
    const [showInfo, setShowInfo] = useState(false);

    const handleInfo = () => {
        setShowInfo(!showInfo)
    }
  return (
    <nav className='navbar'>
        <img src="https://www.svgrepo.com/show/510445/logo-rackext.svg" alt="logo" className='logo' />
        <ul className= "nav-links">
            <Link to="/" className='home'>
                <li>Dashboard</li>
            </Link>
            <Link to="/" className='about'>
                <li>FAQ's</li>
            </Link>
            <Link to="/contact" onClick={openHandler} className='contact'>
                <li>Support</li>
            </Link>
            <Link to="/signup" className='signup'>
                <li className='personna'>
                    <PersonIcon />
                    <div onClick={()=>handleInfo()}>{showInfo ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}</div>
                </li>
            </Link>
        </ul>
    </nav>
  )
}

export default Navbar
