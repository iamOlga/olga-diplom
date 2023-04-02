import React from "react";
import './GalleryCard.css';

const GalleryCard = ({
  sendURL
}) => {
    return (
      <div className="card_cont">
        <img src={sendURL} className='card' alt='Gallery Item' /> 
      </div>
    );
}

export default GalleryCard;
