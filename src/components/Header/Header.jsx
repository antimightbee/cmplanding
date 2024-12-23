import React, { useEffect, useState } from 'react'
import logoImg from "../../img/logo.svg"
import './Header.scss'
import Burger from './Burger'
const Header = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [burger, setBurger] = useState(false)
  window.addEventListener('resize', () => {

  })
useEffect(()=>{
  setWidth(window.innerWidth)
  setBurger(window.innerWidth < 600)
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
    if (width < 500) {
      return "#1082E9"
    } else {
      return back ? "#1082E9" : "transparent"
    }
  }

  return (
    <header className="Header" style={{ background: getBackColor() }}>
      <div className="Header-inner">
        <div className="Header-inner-logo">
          <a href=""><img src={logoImg} alt="Логотип Case Manager" /></a>
        </div>
        {burger ? <Burger /> : <nav className="Header-inner-content">
          <span>Про нас</span>
          <span>Допомога</span>
          <span>Контакти</span>
          <button tabIndex={0} className="Header-inner-content-subscribe">Оформити підписку</button>
        </nav>}

      </div>
    </header>
  )
}

export default Header