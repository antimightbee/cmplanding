import React, { useEffect, useState } from 'react'
import logoImg from "../../img/logo.svg"
import './Header.scss'
import Burger from './Burger'
import { LANG } from '../pageData'
const Header = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [burger, setBurger] = useState(false)

useEffect(()=>{
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
          <span>{LANG.ua.header.about_us}</span>
          <span>{LANG.ua.header.help}</span>
          <span>{LANG.ua.header.contacts}</span>
          <button tabIndex={0} className="Header-inner-content-subscribe">{LANG.ua.header.subscribe}</button>
        </nav>}

      </div>
    </header>
  )
}

export default Header