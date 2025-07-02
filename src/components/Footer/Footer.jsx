import React from 'react'
import "./Footer.scss"
import logo from "../../img/logo-footer.svg"

import { LANG, pageData } from '../pageData'
const Footer = () => {
  const currentYear = new Date().getFullYear()
  const scrollHandler = (id) => {
    const y = document.getElementById(id).getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: y, left: 0, behavior: "smooth" })
  }
  return (
    <footer className="Footer" id={pageData.burgerOptions.contacts.elementId}>
      <div className="Footer-inner">
        <div className="Footer-inner-top">
          <div className="Footer-inner-top-column">
            <div className="Footer-inner-top-column-logo">
              <a href="#"><img src={logo} alt={LANG.ua.footer.logo_alt} /></a>
              <span>Case Manager Pro</span>
            </div>
            <div className="Footer-inner-top-column-links">
              {Object.values(pageData.burgerOptions).map((item, index) => {
                return <a key={index} onClick={() => { scrollHandler(item.elementId) }}>{item.title}</a>
              })}
            </div>
          </div>
          <div className="Footer-inner-top-column">
            <span className="Footer-inner-top-column-gray">{LANG.ua.footer.our_contacts}</span>
            <span className="Footer-inner-top-column-contacts">
              <span><a href="mailto:contact@case-m.pro">contact@case-m.pro</a></span>
              <span><a href="tel:+38 (093)-208-07-60">+38 (093)-208-07-60</a></span>
            </span>
          </div>
        </div>
        <div className="Footer-inner-bottom">
          <span>© {currentYear} Copyright</span>
          <div className="Footer-inner-bottom-socials">
            {pageData.socials.map((item, index) => {
              return <a key={index} href={item.href} target='_blank'><img src={item.img} alt={item.alt} /></a>
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer