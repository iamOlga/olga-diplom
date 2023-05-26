import React, {useEffect, useState} from "react";
import "../../pages/Booking/Booking.css";
import { useController } from "react-hook-form";
import './style.css'
import axios from "axios";

const Select = ({ fullwidth, title, name, control }) => {
    const [options, setOptions] = useState([]);
    const { field } = useController({ control, name });
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/get_tours_select');
            setOptions(response.data);
        } catch (error) {
            console.error(error);
        }
    };

  return (
      <div
          className={
            fullwidth === true ? "input_container full" : "input_container"
          }
      >
        <input name={name} type="hidden" value={field.value}></input>
        <p className="input_name">{title}</p>
          <select onChange={(e) => field.onChange(e.target.value)}>
              <option value="">Выберите...</option>
              {options.map((item) => (
                  <option value={item.id}>
                      {item.name}
                  </option>
              ))}
          </select>
      </div>
  );
};

export default Select;
