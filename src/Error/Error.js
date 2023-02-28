import './../App.css'; 
import img from './../Images/error_img.png'
import Button from './../Button/Button';
import { Link } from "react-router-dom";

function Error() {

  
    return (
      <div className="error__container">
          <img src={img}/>
          <Link className='link' to="/"><Button className='link2' value="Вернуться домой" isrow="row"/></Link>
      </div>
    );
  }
  
  export default Error;