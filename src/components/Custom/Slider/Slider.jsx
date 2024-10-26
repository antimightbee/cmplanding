import React, { useEffect, useState, useRef } from 'react';
import './Slider.scss';
import { pageData } from '../../pageData';
import SliderCard from './SliderCard';

const Slider = () => {
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef(null);
  const requestRef = useRef();
 const [data, setData] = useState([...pageData.sliderData, ...pageData.sliderData])
  const moveSlider = () => {
    // Move the slider to the right
    setTranslateX(prev => {
      // If the slider has scrolled past half its width, reset to the start
      if (sliderRef.current && prev >= sliderRef.current.clientWidth / 4) {
        return setData(prevData => [...prevData.slice(0, 4), ...pageData.sliderData]);
      }
      return prev + 2; // Adjust speed by changing this value
    });
    requestRef.current = requestAnimationFrame(moveSlider);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(moveSlider);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div className="SliderContainer">
      {/* The slider div that holds the sliding content */}
      <div
        className="Slider"
        ref={sliderRef}
        style={{ transform: `translateX(${-translateX}px)`, transition: 'transform 0.1s linear' }}
      >
        {/* Render the slider items twice to create an infinite effect */}
        {data.map((item, index) => {
          return <SliderCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Slider;
