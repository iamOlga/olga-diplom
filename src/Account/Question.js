import React from 'react'
import './Account.css';

const Question = ({title, num, value1, value2, value3}) => {
    return (
        <div className="q_cont">
            <div className="number_container">
                <p>{num}/10</p>
            </div>

            <div className="question">
                <h2>{title}</h2>
                <div className="radio_cont">
                    <label>
                        {value1}
                        <input type="radio" className="modern-radio" value="1" name="a"/>
                            <span></span>
                    </label>
                    <label>
                        {value2}
                        <input type="radio" className="modern-radio" value="2" name="a"/>
                            <span></span>
                    </label>
                    <label>
                        {value3}
                        <input type="radio" className="modern-radio" value="2" name="a"/>
                        <span></span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Question;