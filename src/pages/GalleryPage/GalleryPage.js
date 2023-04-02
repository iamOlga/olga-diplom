import "./GalleryPage.css";
import { GalleryCardsConfig } from '../../config'
import GalleryCard from '../../components/galleryCard/GalleryCard'

const GalleryPage = () => {

  return (
    <div className="gallery__container">
      <h2>Космическая галерея</h2>

      <div className="gallery__cards">
        {GalleryCardsConfig.map((item) => {
          return <GalleryCard sendURL={item} />;
        })}
      </div>
    </div>
  );
}

export default GalleryPage;
