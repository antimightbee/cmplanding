import React, { useState } from 'react'
import './Header.scss'
import { pageData } from '../pageData'

const Burger = () => {
    const [active, setActive] = useState(false)
    const scrollHandler = (id)=>{
        const y = document.getElementById(id).getBoundingClientRect().top + window.scrollY
        setActive(false)
        window.scrollTo({top:y,left:0, behavior:"smooth"})
    }
    return (
        <div className="Burger" >
            <div className="Burger-menu" onClick={()=>{setActive(!active)}}>

            <div className={`Burger-line Burger-line-l1 ${active ? "Burger-line-l1-active" : ""}`}></div>
            <div className={`Burger-line Burger-line-l2 ${active ? "Burger-line-l2-active" : ""}`}></div>
            <div className={`Burger-line Burger-line-l3 ${active ? "Burger-line-l3-active" : ""}`}></div>
            </div>
            {active && <div className="Burger-content">
                {Object.values(pageData.burgerOptions).map((item,index)=>{
                    return <div className="Burger-content-option" key={index} onClick={()=>{scrollHandler(item.elementId)}}>{item.title}</div>
                })}
                </div>}
        </div>
    )
}

export default Burger