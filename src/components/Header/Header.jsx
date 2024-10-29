import React, { useState } from 'react'
import logoImg from "../../img/logo.svg"
import './Header.scss'
const Header = () => {
  const [scroll, setScroll] = useState(window.scrollY)
  const [back, setBack] = useState(false)
  window.addEventListener('scroll', (e) => {
    setScroll(window.scrollY)
    setBackground(window.scrollY)
  })
  const setBackground = (s) => {
    setBack(s>100)
  }

  return (
    <header className="Header" style={{ background: `${back ? "#1082E9" : "transparent"}` }}>
      <div className="Header-inner">
        <div className="Header-inner-logo">
          <a href=""><img src={logoImg} alt="Логотип Case Manager" /></a>
        </div>
        <nav className="Header-inner-content">
          <span>Про нас</span>
          <span>Допомога</span>
          <span>Контакти</span>
          <button className="Header-inner-content-subscribe">Оформити підписку</button>
        </nav>
      </div>
    </header>
  )
}

export default Header