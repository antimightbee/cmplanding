import React from 'react'
import "./Footer.scss"
import logo from "../../img/logo-footer.svg"
import { LANG, pageData } from '../pageData'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="Footer" id={pageData.burgerOptions.contacts.elementId} aria-label="Футер сайту">
      <div className="Footer-inner">

        <div className="Footer-inner-top">

          <div className="Footer-inner-top-column">
            <div className="Footer-inner-top-column-logo">
              <NavLink to="/" aria-label="Головна сторінка">
                <img src={logo} alt={LANG.ua.header.logo_alt} loading="lazy" />
              </NavLink>
              <span>Case Manager Pro</span>
            </div>

            <nav aria-label="Навігація по сторінці">
              <ul className="Footer-inner-top-column-links">
                {Object.values(pageData.burgerOptions).map((item, index) => (
                  <li key={index}
                    aria-label={`Перейти до розділу ${item.title}`}
                  >
                    <a href={`#${item.elementId}`}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="Footer-inner-top-column">
            <span className="Footer-inner-top-column-gray">{LANG.ua.footer.our_contacts}</span>
            <div className="Footer-inner-top-column-contacts">
              <span>
                <a href="mailto:contact@case-m.pro">contact@case-m.pro</a>
              </span>
              <span>
                <a href="tel:+380932080760">+38 (093) 208-07-60</a>
              </span>
            </div>
          </div>

        </div>

        <div className="Footer-inner-bottom">
          <span>© {currentYear} Case Manager Pro</span>

          <nav className="Footer-inner-bottom-socials" aria-label="Соцмережі">
            {pageData.socials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                aria-label={item.alt}
              >
                <img src={item.img} alt={item.alt} loading="lazy" />
              </a>
            ))}
          </nav>
        </div>

      </div>
    </footer>

  )
}

export default Footer