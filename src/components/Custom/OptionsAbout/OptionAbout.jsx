import React, { useEffect, useState } from 'react';
import './OptionAbout.scss';

const OptionAbout = ({ item, reverse }) => {
  const [width, setWidth] = useState(window.innerWidth)

  window.addEventListener('resize',(e)=>{
    setWidth(window.innerWidth)
  })
  const sideImgStyles = () => {
    if (reverse) {
      return { right: '-150px', bottom: '-50px', display:width<760?"none":"block"};
    } else {
      return { left: '-150px', bottom: '-50px', display:width<760?"none":"block" };
    }
  };

  const flexDirection = ()=>{
    if(width<1024){
      return'column-reverse'
    }else{
      return reverse ? 'row-reverse' : 'row'
    }
  }
  return (
    <div
      className="OptionAbout"
      style={{ flexDirection: flexDirection()}}
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
