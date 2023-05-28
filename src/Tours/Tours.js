import './dist/Tours.css';
import Tours_card from './Tours_card'
import {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import axios from "axios";

function Tours() {
  const [tourData, setTourData] = useState([]);
  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/tours');
        setTourData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchImageData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/image');
        setImageData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTourData();
    fetchImageData();
  }, []);

  return (
    <div className="tours__container">
      <h2>Космические туры</h2>

      <div className="tours__cards">
        {tourData.map((tour) => {
          // Находим записи изображений для текущего тура
          const tourImages = imageData.filter((image) => image.id_tour === tour.id);
          // Находим основное изображение
          const mainImage = tourImages.find((image) => image.type === 'img');

          // Находим изображение фона
          const bgImage = tourImages.find((image) => image.type === 'bg');
          var row = 'row';
          if (tour.id % 2 == 0){
             row = 'rowreverse';
          }

          const formatDate = (dateString) => {
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            const date = new Date(dateString);
            return date.toLocaleDateString('ru-RU', options);
          };

          const formattedDate = formatDate(tour.date_flight);
          const formattedNumber = tour.price.toLocaleString('ru-RU');


          return (
              <Tours_card isreverse={row} urlbg={bgImage?.url} name={tour.name} place={tour.planet} description={tour.description} time_fly={tour.duration} time_onplanet={tour.residence} amount_people={tour.count_passengers} price={formattedNumber} date={formattedDate} imgurl={mainImage?.url}/>
          );
        })}
        
      </div>
    </div>
  );
}

export default Tours;