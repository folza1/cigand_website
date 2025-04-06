import './slideshow.css';
import { useState, useEffect } from 'react';

const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const images = [
    "/images/slideshow/kep1.jpg",
    "/images/slideshow/kep2.jpg",
    "/images/slideshow/kep3.jpg",
    "/images/slideshow/kep4.jpg",
    "/images/slideshow/kep5.jpg",
    "/images/slideshow/kep6.jpg",
    "/images/slideshow/kep7.jpg"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false); // Indítja a fade-out animációt
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Képváltás
        setFade(true); // Fade-in animáció
      }, 1000); // 1 másodperc várakozás fade-out után
    }, 4000); // 3 másodpercenként vált a kép

    return () => clearInterval(intervalId); // Takarítás, ha a komponens eltűnik
  }, []);

  return (
    <>
      <div className='ev_and_doc_and_slideshow'>
        <div className='slideshow'>
          <div className={`slideshow_container ${fade ? 'fade-in' : 'fade-out'}`}>
            <img src={images[currentIndex]} alt="Slideshow" />
          </div>
        </div>
        <div className='events_and_documents'>
          <div className='documents'>Friss dokumentumok</div>
          <div className='events'>
            <div className='event1'>Friss események1</div>
            <div className='event2'>Friss események2</div>
          </div>
        </div>
      </div>
      <div className='documents_600'>Friss dokumentumok</div>
      <div className='event1_600'>Friss események1</div>
      <div className='event2_600'>Friss események2</div>
    </>
  );
};

export default SlideShow;

