import React, { useState } from 'react'
import "./Card.scss"
import arrow from "../../../img/icons/arrow-right.svg"
import cross from "../../../img/icons/cross.svg"
import tick from "../../../img/icons/tick.svg"
import { LANG, pageData } from '../../pageData'
import pricingImg from "../../../img/frontpage/pricing-img.png"
import optionImg from "../../../img/frontpage/option.png"
import SubscibeModal from "../../Modals/SubscribeModal"
const Card = ({ item, switchActive }) => {
    const [modal,setModal] = useState(false)
    const getPrice = () => {
        const yearlyPrice = item.price * 12
        return switchActive ? Math.floor(yearlyPrice * ((100 - pageData.yearDiscount) * 0.01)) : item.price
    }
    return (
        <div className="Card">
            <div className="Card-decoration">
                <img src={pricingImg} alt={LANG.ua.deco} />
            </div>
            <div className='Card-content'>
                <div className="Card-title">{item.title}</div>
                <div className="Card-pricing">
                    <div className="Card-pricing-price">
                        <span>{LANG.ua.card.from} </span>
                        <span className='Card-pricing-price-large'>{getPrice()}</span>
                        <span> {LANG.ua.card.uah} / </span>
                        {switchActive ? LANG.ua.card.year : LANG.ua.card.month}
                    </div>
                    <div className="Card-pricing-method">{LANG.ua.card.set} {switchActive ? LANG.ua.card.yearly : LANG.ua.card.monthly}</div>
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
                <button className='Card-button' onClick={()=>{setModal(true)}}>
                    <div>{LANG.ua.card.subscribe}</div>
                    <img src={arrow} alt={LANG.ua.card.subscribe} />
                </button>
            </div>
            <div className='Card-img-wrap'>
                <img className="Card-img" src={optionImg} alt={item.title} />
            </div>
            {modal && <SubscibeModal close={()=>{setModal(false)}}/>}
        </div>
    )
}

export default Card