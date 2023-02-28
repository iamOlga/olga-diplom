import React from 'react'
import './../dist/Booking.css';

class TextArea extends React.Component {
    render() {
        return <div className={this.props.fullwidth == true ? "input_container full" : "input_container"}>
            <p className="input_name">{this.props.name}</p>
            <textarea placeholder="Напиши ответ..." maxLength='850'/>
        </div>;
    }
  }

export default TextArea;