import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import './FrontPage.scss'
import Header from '../../Header/Header'
import { LANG, pageData } from '../../pageData'
import Option from '../../Custom/Option/Option'
import OptionAbout from '../../Custom/OptionsAbout/OptionAbout'
import aboutLogo from "../../../img/frontpage/about-logo.svg"
import Switch from '../../Custom/Switch/Switch'
import Card from '../../Custom/Card/Card'
import Slider from '../../Custom/Slider/Slider'
import FeedbackForm from '../../Custom/FeedbackForm/FeedbackForm'

const FrontPage = () => {
  const [switchActive, setSwitchActive] = useState(false)

  return (
    <>
      <Helmet>
        <html lang="uk" />
        <title>Case Manager Pro</title>
        <meta name="description" content={LANG.ua.first_screen.description} />
      </Helmet>

      <main className="FrontPage">
        <header className="FrontPage-fscreen">
          <Header />
          <div className="FrontPage-fscreen-content-wrap">
            <div className="FrontPage-fscreen-content">
              <section className="FrontPage-fscreen-content-text" aria-label="Вступна інформація">
                <div className="FrontPage-fscreen-content-text-title">
                  <h2>{LANG.ua.first_screen.title}</h2>
                  <h1>Case Manager Pro</h1>
                </div>
                <p className="FrontPage-fscreen-content-text-desc">{LANG.ua.first_screen.description}</p>
              </section>
              <FeedbackForm />
            </div>
          </div>
        </header>

        <section className="FrontPage-options" id={pageData.burgerOptions.about.elementId} aria-label="Переваги">
          <div className="FrontPage-options-inner">
            {pageData.options.map((item, index) => (
              <Option key={index} item={item} />
            ))}
          </div>
        </section>

        <section className="FrontPage-optionsAbout" aria-label="Опис можливостей">
          {pageData.optionsAbout.map((item, index) => (
            <OptionAbout key={index} item={item} reverse={index % 2 === 1} />
          ))}
        </section>

        <section className="FrontPage-about" aria-label="Про Case Manager">
          <h2 className="FrontPage-about-title">Case Manager Pro</h2>
          <div className="FrontPage-about-img">
            <img src={aboutLogo} alt="Логотип Case Manager" loading="lazy" />
          </div>
          <div className="FrontPage-about-bottom">
            <div className="FrontPage-about-bottom-imgleft" />
            <p className="FrontPage-about-bottom-text">{LANG.ua.about_case_manager}</p>
            <div className="FrontPage-about-bottom-imgright" />
          </div>
        </section>

        <section className="FrontPage-subscriptions" id={pageData.burgerOptions.price.elementId} aria-label="Плани підписки">
          <div className="FrontPage-subscriptions-inner">
            <h2 className="FrontPage-subscriptions-inner-title">{LANG.ua.subscription.title}</h2>
            <p className="FrontPage-subscriptions-inner-description">{LANG.ua.subscription.description}</p>
            <div className="FrontPage-subscriptions-inner-switch">
              <div className="FrontPage-subscriptions-inner-switch-inner">
                <p>{LANG.ua.subscription.monthly}</p>
                <Switch toggle={setSwitchActive} />
                <p>{LANG.ua.subscription.yearly}</p>
              </div>
              <p className="FrontPage-subscriptions-inner-switch-sale">
                {LANG.ua.subscription.discount} {pageData.yearDiscount}%
              </p>
            </div>

            <div className="FrontPage-subscriptions-inner-cards">
              {pageData.subscriptions.map((item, index) => (
                <Card key={index} item={item} switchActive={switchActive} />
              ))}
            </div>
          </div>
        </section>

        {/* <section className="FrontPage-slider" aria-label="Відгуки користувачів">
          <h2 className="FrontPage-slider-title">{LANG.ua.feedbacks}</h2>
          <Slider />
        </section> */}
      </main>
    </>
  )
}

export default FrontPage
