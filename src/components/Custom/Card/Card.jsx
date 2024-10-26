import React from 'react'
import "./Card.scss"
import arrow from "../../../img/icons/arrow-right.svg"
import cross from "../../../img/icons/cross.svg"
import tick from "../../../img/icons/tick.svg"
import { pageData } from '../../pageData'
import pricingImg from "../../../img/frontpage/pricing-img.png"
const Card = ({ item, switchActive }) => {

    const getPrice = () => {
        const yearlyPrice = item.price * 12
        return switchActive ? yearlyPrice * ((100 - pageData.yearDiscount) * 0.01) : item.price
    }
    return (
        <div className="Card">
            {item?.img && <div className="Card-img">
                <img src={pricingImg} alt="Декорація" />
            </div>}
            <div className="Card-title">{item.title}</div>
            <div className="Card-pricing">
                <div className="Card-pricing-price">
                    <span className='Card-pricing-price-large'>{getPrice()}</span>
                    <span> грн / </span>
                    {switchActive ? "рік" : "місяць"}
                </div>
                <div className="Card-pricing-method">виставляється {switchActive ? "щорічно" : "щомісячно"}</div>
            </div>
            <div className="Card-options">
                {Object.keys(item.options).map((option, index) => {
                    return (
                        <div key={index} className="Card-options-option">
                            <img src={item.options[option] ? tick : cross} alt={option} />
                            <span className={!item.options[option] ? "Card-options-option-false" : ""}>{option}</span>
                        </div>
                    )
                })}
            </div>
            <button className='Card-button'>
                <div>Оформити підписку</div>
                <img src={arrow} alt="Оформити підписку" />
            </button>
        </div>
    )
}

export default Card