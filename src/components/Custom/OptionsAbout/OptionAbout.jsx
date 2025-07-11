import React, { useState } from 'react';
import './OptionAbout.scss';

const OptionAbout = ({ item, reverse }) => {
  const [width, setWidth] = useState(window.innerWidth)

  window.addEventListener('resize', (e) => {
    setWidth(window.innerWidth)
  })
  const sideImgStyles = () => {
    if (reverse) {
      return { right: '-150px', bottom: '-50px', display: width < 800 ? "none" : "block" };
    } else {
      return { left: '-150px', bottom: '-50px', display: width < 800 ? "none" : "block" };
    }
  };

  const flexDirection = () => {
    if (width < 1100) {
      return 'column-reverse'
    } else {
      return reverse ? 'row-reverse' : 'row'
    }
  }
  return (
    <div
      className="OptionAbout"
      style={{ flexDirection: flexDirection() }}
    >
      <section className="OptionAbout-img">
        <img
          className="OptionAbout-img-main"
          src={item.img}
          alt={item.title}
        />
        <img
          className="OptionAbout-img-side"
          style={sideImgStyles()}
          src={item.sideImg} alt="" />
      </section>

      <section className="OptionAbout-text">
        <h2 className="OptionAbout-text-title">{item.title}</h2>
        <p>{item.description}</p>
      </section>
    </div>
  );
};

export default OptionAbout;
