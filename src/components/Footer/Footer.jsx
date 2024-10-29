import React from 'react'
import "./Footer.scss"
import logo from "../../img/logo-footer.svg"
import facebook from "../../img/icons/facebook.svg"
import instagram from "../../img/icons/instagram.svg"
import telegram from "../../img/icons/telegram.svg"
const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-inner">
        <div className="Footer-inner-top">
          <div className="Footer-inner-top-column">
          <div className="Footer-inner-top-column-logo">
            <img src={logo} alt="Логотип Case Manager" />
            <span>Case Manager</span>
          </div>
          <div className="Footer-inner-top-column-links">
            <span><a href="">Про нас</a></span>
            <span><a href="">Новини</a></span>
            <span><a href="">Допомога</a></span>
          </div>
          </div>
          <div className="Footer-inner-top-column">
            <span className="Footer-inner-top-column-gray">Наші контакти</span>
            <span className="Footer-inner-top-column-contacts">
              <span><a href="mailto:support@gmail.com">support@gmail.com</a></span>
              <span><a href="tel:+380-66-000-11-35">+380-66-000-11-35</a></span>
            </span>
          </div>
        </div>
        <div className="Footer-inner-bottom">
          <span>2024 Copyright</span>
          <div className="Footer-inner-bottom-socials">
            <a href="" target='_blank'><img src={facebook} alt="Facebook" /></a>
            <a href="" target='_blank'><img src={instagram} alt="Instagram" /></a>
            <a href="" target='_blank'><img src={telegram} alt="Telegram" /></a>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer