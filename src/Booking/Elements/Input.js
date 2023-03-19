import React from 'react'
import './../dist/Booking.css';

class Input extends React.Component {
    render() {
        if(this.props.type == 'text'){
            return <div className={this.props.fullwidth == true ? "input_container full" : "input_container"}>
                <p className="input_name">{this.props.name}</p>
                <input id={'elem' + this.props.elid} type={this.props.type} placeholder={this.props.name}/>
            </div>;
        }
        if(this.props.type == 'number'){
            return <div className={this.props.fullwidth == true ? "input_container full" : "input_container"}>
                <p className="input_name">{this.props.name}</p>
                <input type={this.props.type} placeholder={this.props.min} min={this.props.min} max={this.props.max}/>
            </div>;
        }
        if(this.props.type == 'password'){
            return <div className={this.props.fullwidth == true ? "input_container full" : "input_container"}>
                <p className="input_name">{this.props.name}</p>
                <input id={'elem' + this.props.elid} type={this.props.type} placeholder={this.props.name}/>
            </div>;
        }
    }
  }

export default Input;