import React, { useState } from 'react'
import "./Card.scss"
import arrow from "../../../img/icons/arrow-right.svg"
import cross from "../../../img/icons/cross.svg"
import tick from "../../../img/icons/tick.svg"
import { LANG, pageData } from '../../pageData'
import pricingImg from "../../../img/frontpage/pricing-img.png"
import optionImg from "../../../img/frontpage/option.png"
import SubscribeModal from "../../Modals/SubscribeModal"
import ArrowRight from '../SVGIcons/ArrowRight'
const Card = ({ item, switchActive }) => {
    const [modal, setModal] = useState(false)
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
                        <span> {LANG.ua.card.uah} / {switchActive ? LANG.ua.card.year : LANG.ua.card.month}</span>
                    </div>
                    <div className="Card-pricing-method">{LANG.ua.card.set} {switchActive ? LANG.ua.card.yearly : LANG.ua.card.monthly}</div>
                </div>
                <div className="Card-options">
                    {Object.keys(item.options).map((option, index) => {
                        return (
                            <div key={index} className="Card-options-option">
                                <img src={item.options[option] ? tick : cross} alt={option} />
                                <p className={!item.options[option] ? "Card-options-option-false" : ""}>{option}</p>
                            </div>
                        )
                    })}
                </div>
                <button className='Card-button' onClick={() => { setModal(true) }}>
                    <p>{LANG.ua.card.subscribe}</p>
                    <ArrowRight/>
                </button>
            </div>
            <div className='Card-img-wrap'>
                <img className="Card-img" src={optionImg} alt={item.title} />
            </div>
            {modal && <SubscribeModal close={() => { setModal(false) }} />}
        </div>
    )
}

export default Card