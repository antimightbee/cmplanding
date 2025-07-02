import React, { useEffect, useState } from 'react'
import logoImg from "../../img/logo.svg"
import './Header.scss'
import Burger from './Burger'
import { LANG, pageData } from '../pageData'
import SubscribeModal from '../Modals/SubscribeModal'
const Header = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [burger, setBurger] = useState(false)
  const [modal, setModal] = useState(false)
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
      setBurger(window.innerWidth < 720)
    })
  }, [window.innerWidth])
  const [scroll, setScroll] = useState(window.scrollY)
  const [back, setBack] = useState(false)
  window.addEventListener('scroll', (e) => {
    setScroll(window.scrollY)
    setBackground(window.scrollY)
  })
  const setBackground = (s) => {
    setBack(s > 100)
  }
  const scrollHandler = (id) => {
    const y = document.getElementById(id).getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: y, left: 0, behavior: "smooth" })
  }
  const getBackColor = () => {
    if (width < 720) {
      return "#1082E9"
    } else {
      return back ? "#1082E9" : "transparent"
    }
  }


  return (
    <header className="Header" style={{ background: getBackColor() }}>
      <div className="Header-inner">
        <div className="Header-inner-logo">
          <a href=""><img src={logoImg} alt={LANG.ua.header.logo_alt} /></a>
        </div>
        {burger ? <Burger /> : <nav className="Header-inner-content">
          {Object.values(pageData.burgerOptions).map((item, index) => {
            return <span key={index} onClick={() => { scrollHandler(item.elementId) }}>{item.title}</span>
          })}
          <button tabIndex={0} className="Header-inner-content-subscribe" onClick={()=>{setModal(true)}}>{LANG.ua.header.subscribe}</button>
        </nav>}

      </div>
      {modal && <SubscribeModal close={()=>{setModal(false)}}/>}
    </header>
  )
}

export default Header