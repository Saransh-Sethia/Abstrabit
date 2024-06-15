import React from "react";
import details from "./details";
import './Schedule.css';
import ScheduleCard from "./ScheduleCard";

const Schedule = () => {
  return (
    <div className='schedule-card'>
      {
        details.map((detail, id) => (
            <div key={id} className='grid-item' >
            <ScheduleCard detail={detail} id={id}  />
            </div>
        ))
      }
      </div>
  );
};

export default Schedule;
