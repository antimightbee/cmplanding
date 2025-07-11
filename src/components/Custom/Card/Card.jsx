import React, { useState } from 'react'
import "./Card.scss"
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
        <article className="Card" aria-label={`План підписки: ${item.title}`}>
            <div className="Card-decoration">
                <img src={pricingImg} alt={LANG.ua.deco} loading="lazy" />
            </div>

            <div className="Card-content">
                <h3 className="Card-title">{item.title}</h3>

                <div className="Card-pricing">
                    <div className="Card-pricing-price">
                        <span>{LANG.ua.card.from} </span>
                        <span className="Card-pricing-price-large">{getPrice()}</span>
                        <span>
                            {' '}
                            {LANG.ua.card.uah} / {switchActive ? LANG.ua.card.year : LANG.ua.card.month}
                        </span>
                    </div>
                    <div className="Card-pricing-method">
                        {LANG.ua.card.set} {switchActive ? LANG.ua.card.yearly : LANG.ua.card.monthly}
                    </div>
                </div>

                <ul className="Card-options">
                    {Object.keys(item.options).map((option, index) => {
                        const included = item.options[option]
                        return (
                            <li
                                key={index}
                                className={`Card-options-option ${!included ? 'Card-options-option-false' : ''}`}
                            >
                                <img
                                    src={included ? tick : cross}
                                    alt={included ? LANG.ua.card.included : LANG.ua.card.not_included}
                                    loading="lazy"
                                />
                                <p>{option}</p>
                            </li>
                        )
                    })}
                </ul>

                <button
                    type="button"
                    className="Card-button"
                    onClick={() => setModal(true)}
                    aria-label={`Підписатися на план ${item.title}`}
                >
                    <p>{LANG.ua.card.subscribe}</p>
                    <ArrowRight />
                </button>
            </div>

            <div className="Card-img-wrap">
                <img className="Card-img" src={optionImg} alt={`Зображення плану ${item.title}`} loading="lazy" />
            </div>

            {modal && <SubscribeModal close={() => setModal(false)} />}
        </article>

    )
}

export default Card