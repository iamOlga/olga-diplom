
import React from 'react';
import '../../pages/Booking/Booking.css';

const Select = ({fullwidth, name}) => {
  return (
 <div className={fullwidth === true ? "input_container full" : "input_container"}>
             <p className="input_name">{name}</p>
             <select>
                 <option className='option'>Mars</option>
                 <option className='option'>the Moon</option>
                 <option className='option'>Space station</option>
             </select>
         </div>
  )
}

export default Select