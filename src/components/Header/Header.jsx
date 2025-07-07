import React, { useEffect, useState } from 'react'
import logoImg from "../../img/logo.svg"
import './Header.scss'
import Burger from './Burger'
import { LANG, pageData } from '../pageData'
import SubscribeModal from '../Modals/SubscribeModal'
import { NavLink, useNavigate } from 'react-router-dom'
const Header = () => {
  const [burger, setBurger] = useState(false)
  const [burgerActive, setBurgerActive] = useState(false)
  const [modal, setModal] = useState(false)
  const [back, setBack] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => setBurger(window.innerWidth < 800)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => setBackground(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [burgerActive])

  useEffect(() => {
    setBackground(window.scrollY)
  }, [burgerActive])

  const setBackground = (s = 0) => {
    setBack(s > 100 || window.location.pathname !== '/' || burgerActive)
  }
  const scrollHandler = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      scrollToElement(id);
    }
  };

  const scrollToElement = (id) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: y, left: 0, behavior: "smooth" });
      }
    }, 100); // slight delay to ensure DOM is ready
  };
  const getBackColor = () => {
    if (window.innerWidth < 720) {
      return "#1082E9"
    } else {
      return back ? "#1082E9" : "transparent"
    }
  }


  return (
    <header className="Header" style={{ background: getBackColor() }}>
      <div className="Header-inner">
        <div className="Header-inner-logo">
          <NavLink to="/"><img src={logoImg} alt={LANG.ua.header.logo_alt} /></NavLink>
        </div>
        {burger ? <Burger active={burgerActive} toggle={(val)=>{setBurgerActive(val); setBackground()}} /> : <nav className="Header-inner-content">
          {Object.values(pageData.burgerOptions).map((item, index) => {
            return <span key={index} onClick={() => { scrollHandler(item.elementId) }}>{item.title}</span>
          })}
          <button tabIndex={0} className="Header-inner-content-subscribe" onClick={() => { setModal(true) }}>{LANG.ua.header.subscribe}</button>
        </nav>}

      </div>
      {modal && <SubscribeModal close={() => { setModal(false) }} />}
    </header>
  )
}

export default Header