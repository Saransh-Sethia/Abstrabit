import React from 'react';
import companies from './CompanyDetails';
import BookingCard from './BookingCard';
import './Bookings.css'

const Bookings = () => {
  return (
    <div className='booking-card'>
      {
        companies.map((company, id) => (
            <div key={id} className='grid-item' >
            <BookingCard company={company} id={id}  />
            </div>
        ))
      }
      </div>
    
  )
}

export default Bookings
