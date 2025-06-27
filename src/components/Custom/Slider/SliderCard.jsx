import React from 'react'
import "./Slider.scss"
import star from "../../../img/icons/star.svg"
const SliderCard = ({ item }) => {
    console.log(item)
    return (
        <div className="SliderCard">
            <div className="SliderCard-top">
                <img src={item.profileImg} alt={item.name} />
                <div className='SliderCard-top-profile'>
                    <div className='SliderCard-top-profile-top'>
                        <div className="SliderCard-top-profile-top-title">{item.name}</div>
                        <div className="SliderCard-top-profile-top-date">{item.date}</div>
                    </div>
                    <div className="SliderCard-top-profile-rating">
                        <img src={star} alt={`Рейтинг ${item.rating} зірок`} />
                        <span>{item.rating}</span>
                    </div>
                </div>
            </div>
            <div className="SliderCard-bottom">
                <span>{item.text}</span>
            </div>
        </div>
    )
}

export default SliderCard