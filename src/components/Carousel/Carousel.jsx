import { useRef } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import './Carousel.scss';

const Carousel = () => {
  const slideRef = useRef();
  let offset = 0;
  const handleClick = d => {
    if (d === 'right' && offset > -(4400 - window.innerWidth)) {
      offset = offset - 440;
      slideRef.current.style.transform = `translateX(${offset - 440}px)`;
      console.log(offset);
    } else if (d === 'left' && offset < 0) {
      slideRef.current.style.transform = `translateX(${offset + 440}px)`;
      offset = offset + 440;
    }
  };

  return (
    <div className='app__carousel'>
      <div className='app__carousel-container'>
        <AiOutlineArrowLeft onClick={() => handleClick('left')} className='carousel__arrow left' />

        <div className='carousel_images' ref={slideRef}>
          <div>
            <img src='https://static4.depositphotos.com/1001951/474/i/950/depositphotos_4744054-stock-photo-old-antique-clock.jpg' alt='' />
          </div>
          <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/5/55/Paris_-_Vintage_travel_gear_seller_at_the_marche_Dauphine_-_5212.jpg' alt='' />
          </div>
          <div>
            <img src='https://static4.depositphotos.com/1001951/474/i/950/depositphotos_4744054-stock-photo-old-antique-clock.jpg' alt='' />
          </div>
          <div>
            <img src='https://static4.depositphotos.com/1001951/474/i/950/depositphotos_4744054-stock-photo-old-antique-clock.jpg' alt='' />
          </div>
          <div>
            <img src='https://static4.depositphotos.com/1001951/474/i/950/depositphotos_4744054-stock-photo-old-antique-clock.jpg' alt='' />
          </div>
          <div>
            <img src='https://static4.depositphotos.com/1001951/474/i/950/depositphotos_4744054-stock-photo-old-antique-clock.jpg' alt='' />
          </div>
          <div>
            <img src='https://static4.depositphotos.com/1001951/474/i/950/depositphotos_4744054-stock-photo-old-antique-clock.jpg' alt='' />
          </div>
          <div>
            <img src='https://static4.depositphotos.com/1001951/474/i/950/depositphotos_4744054-stock-photo-old-antique-clock.jpg' alt='' />
          </div>
          <div>
            <img src='https://static4.depositphotos.com/1001951/474/i/950/depositphotos_4744054-stock-photo-old-antique-clock.jpg' alt='' />
          </div>
          <div>
            <img src='https://static4.depositphotos.com/1001951/474/i/950/depositphotos_4744054-stock-photo-old-antique-clock.jpg' alt='' />
          </div>
          <div>
            <img src='https://static4.depositphotos.com/1001951/474/i/950/depositphotos_4744054-stock-photo-old-antique-clock.jpg' alt='' />
          </div>
        </div>

        <AiOutlineArrowRight onClick={() => handleClick('right')} className='carousel__arrow right' />
      </div>
    </div>
  );
};
export default Carousel;
