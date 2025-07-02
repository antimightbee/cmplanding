import React, { useState } from 'react'
import './FrontPage.scss'
import Header from '../Header/Header'
import { LANG, pageData } from '../pageData'
import Option from '../Custom/Option/Option'
import OptionAbout from '../Custom/OptionsAbout/OptionAbout'
import aboutLogo from "../../img/frontpage/about-logo.svg"
import Switch from '../Custom/Switch/Switch'
import Card from '../Custom/Card/Card'
import Slider from '../Custom/Slider/Slider'
import FeedbackForm from '../Custom/FeedbackForm/FeedbackForm'
const FrontPage = () => {
  const [switchActive, setSwitchActive] = useState(false)
  return (
    <div className="FrontPage">

      <div className="FrontPage-fscreen">
        <Header />
        <div className="FrontPage-fscreen-content-wrap">

          <div className="FrontPage-fscreen-content">
            <section className='FrontPage-fscreen-content-text'>
              <div className="FrontPage-fscreen-content-text-title">
                <div>{LANG.ua.first_screen.title}</div>
                <div>Case Manager</div>
              </div>
              <div className="FrontPage-fscreen-content-text-desc">{LANG.ua.first_screen.description}</div>
            </section>
            <FeedbackForm/>

          </div>
        </div>

      </div>
      <div className="FrontPage-options"  id={pageData.burgerOptions.about.elementId}>
        <div className="FrontPage-options-inner">
          {pageData.options.map((item, index) => {
            return <Option key={index} item={item} />
          })}
        </div>
      </div>


      <div className="FrontPage-optionsAbout">
        {pageData.optionsAbout.map((item, index) => {
          return <OptionAbout key={index} item={item} reverse={index % 2 == 1} />
        })}
      </div>

      <div className="FrontPage-about">

        <span className="FrontPage-about-title">Case Manager</span>
        <div className="FrontPage-about-img">
          <img src={aboutLogo} alt="Case Manager" />
        </div>
        <div className="FrontPage-about-bottom">
          <div className="FrontPage-about-bottom-imgleft"></div>

          <span className="FrontPage-about-bottom-text">{LANG.ua.about_case_manager}</span>

          <div className="FrontPage-about-bottom-imgright"></div>
        </div>
      </div>

      <div className="FrontPage-subscriptions" id={pageData.burgerOptions.price.elementId}>
        <div className="FrontPage-subscriptions-inner">
          <div className="FrontPage-subscriptions-inner-title">{LANG.ua.subscription.title}</div>
          <span className="FrontPage-subscriptions-inner-description">{LANG.ua.subscription.description}</span>
          <div className="FrontPage-subscriptions-inner-switch">
            <div className="FrontPage-subscriptions-inner-switch-inner">
              <span>{LANG.ua.subscription.monthly}</span>
              <Switch toggle={(active) => { setSwitchActive(active) }} />
              <span>{LANG.ua.subscription.yearly}</span>
            </div>
            <div className='FrontPage-subscriptions-inner-switch-sale'>{LANG.ua.subscription.discount} {pageData.yearDiscount}%</div>
          </div>
          <div className="FrontPage-subscriptions-inner-cards">
            {pageData.subscriptions.map((item, index) => {
              return <Card key={index} item={item} switchActive={switchActive} />
            })}
          </div>
        </div>
      </div>

      {/* <div className="FrontPage-slider">
        <div className="FrontPage-slider-title">{LANG.ua.feedbacks}</div>
        <Slider />
      </div> */}
    </div>
  )
}

export default FrontPage