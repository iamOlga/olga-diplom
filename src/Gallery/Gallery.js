import './../Style/dist/Gallery.css';
import Gallery_card from './Gallery_card'

import { useState } from 'react';

import pic1 from './Images/pic1.jpg'
import pic2 from './Images/pic2.jpg'
import pic3 from './Images/pic3.jpg'
import pic4 from './Images/pic4.jpg'
import pic5 from './Images/pic5.jpg'
import pic6 from './Images/pic6.jpg'
import pic7 from './Images/pic7.jpg'
import pic8 from './Images/pic8.jpg'

function Gallery() {

  const [pic_1] = useState(pic1);
  const [pic_2] = useState(pic2);
  const [pic_3] = useState(pic3);
  const [pic_4] = useState(pic4);
  const [pic_5] = useState(pic5);
  const [pic_6] = useState(pic6);
  const [pic_7] = useState(pic7);
  const [pic_8] = useState(pic8);

  return (
    <div className="gallery__container">
      <h2>Космическая галерея</h2>

      <div className="gallery__cards">
        <Gallery_card sendUrl={pic_1}/>
        <Gallery_card sendUrl={pic_2}/>
        <Gallery_card sendUrl={pic_3}/>
        <Gallery_card sendUrl={pic_4}/>
        <Gallery_card sendUrl={pic_5}/>
        <Gallery_card sendUrl={pic_6}/>
        <Gallery_card sendUrl={pic_7}/>
        <Gallery_card sendUrl={pic_8}/>
      </div>
    </div>
  );
}

export default Gallery;