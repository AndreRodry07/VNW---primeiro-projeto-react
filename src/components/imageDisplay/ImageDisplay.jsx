import { useState, useEffect } from 'react';
import ReyNegroCoffe from '../../assets/images/ReyNegroCoffe.jpg'
import './image-display.css';

export default function ImageDisplay() {
  const [displayImage, setDisplayImage] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDisplayImage(true);
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleCloseImage = () => {
    setDisplayImage(false);
  };

  return (
    <div>
      {displayImage && (
        <div className='image-overlay'>
        <figure className="image-promo">
          <img src={ReyNegroCoffe} alt="Imagem" className="overlay-image" />
          <button className='close-button' onClick={handleCloseImage}>X</button>
        </figure>
        </div>
      )}
    </div>
  );
}
