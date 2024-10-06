import React from 'react';
import './OptionAbout.scss';

const OptionAbout = ({ item, reverse }) => {
  const sideImgStyles = () => {
    if (reverse) {
      return { right: '-150px', bottom: '-50px' };
    } else {
      return { left: '-150px', bottom: '-50px' };
    }
  };

  return (
    <div
      className="OptionAbout"
      style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}
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
          src={item.sideImg} alt=""/>
      </section>

      <section className="OptionAbout-text">
        <span className="OptionAbout-text-title">{item.title}</span>
        <span>{item.description}</span>
      </section>
    </div>
  );
};

export default OptionAbout;
