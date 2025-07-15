import React, { useState } from 'react'
import './Header.scss'
import { LANG, pageData } from '../pageData'
import SubscribeModal from '../Modals/SubscribeModal'

const Burger = ({active, toggle}) => {
    const [modal, setModal] = useState(false)
    return (
        <div className="Burger" >
            <div className="Burger-menu" onClick={() => { toggle(!active) }}>

                <div className={`Burger-line Burger-line-l1 ${active ? "Burger-line-l1-active" : ""}`}></div>
                <div className={`Burger-line Burger-line-l2 ${active ? "Burger-line-l2-active" : ""}`}></div>
                <div className={`Burger-line Burger-line-l3 ${active ? "Burger-line-l3-active" : ""}`}></div>
            </div>
            {active && <nav className="Burger-content">
                {Object.values(pageData.burgerOptions).map((item, index) => {
                    return <a className="Burger-content-option" href={`#${item.elementId}`} key={index}
                    onClick={()=>{toggle(!active)}}>{item.title}</a>
                })}
                <button tabIndex={0} className="Header-inner-content-subscribe" onClick={() => { setModal(true) }}>{LANG.ua.header.subscribe}</button>

            </nav>}
            {modal && <SubscribeModal close={() => { setModal(false) }} />}

        </div>
    )
}

export default Burger