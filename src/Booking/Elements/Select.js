import React from 'react'
import './../dist/Booking.css';

class Input extends React.Component {
    render() {
        return <div className={this.props.fullwidth == true ? "input_container full" : "input_container"}>
            <p className="input_name">{this.props.name}</p>
            <select>
                <option className='option'>Mars</option>
                <option className='option'>the Moon</option>
                <option className='option'>Space station</option>
            </select>
        </div>;
    }
  }

export default Input;