import { useState, useEffect } from 'react';
import './carousel.css';

type ImagesProps = {
  images: {
    chromas: boolean;
    id: string;
    name: string;
    num: number;
  }[];
  id: string;
};

const Carousel = ({ images, id }: ImagesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className='carousel'>
      <button onClick={prevSlide} data-testid='next-skin-btn'>
        &lt;
      </button>
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${images[currentIndex].num}.jpg`}
        alt={`slide-${currentIndex}`}
        className='championSkin__img'
      />
      <button onClick={nextSlide} data-testid='previous-skin-btn'>
        &gt;
      </button>
      <p>{images[currentIndex].name}</p>
    </div>
  );
};

export default Carousel;
