import React from 'react'
import logoImg from "../../img/logo.svg"
import './Header.scss'
const Header = () => {
  return (
    <header className="Header">
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