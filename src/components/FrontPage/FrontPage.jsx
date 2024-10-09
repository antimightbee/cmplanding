import React, { useState } from 'react'
import './FrontPage.scss'
import Header from '../Header/Header'
import { pageData } from '../pageData'
import Option from '../Custom/Option/Option'
import OptionAbout from '../Custom/OptionsAbout/OptionAbout'
import aboutLogo from "../../img/frontpage/about-logo.svg"
import Switch from '../Custom/Switch/Switch'
import Card from '../Custom/Card/Card'
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
                <div>Оптимізуйте свою роботу з</div>
                <div>Case Manager</div>
              </div>
              <div className="FrontPage-fscreen-content-text-desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nulla, earum aut odio voluptates provident soluta
              </div>
            </section>
            <section className='FrontPage-fscreen-content-img'>

            </section>
          </div>
        </div>

      </div>
      <div className="FrontPage-options">
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
          <span className="FrontPage-about-bottom-text">
            Lorem ipsum dolor sit amet consectetur. Magna tincidunt diam tellus pellentesque eu odio integer faucibus.
            Risus odio elit lectus scelerisque accumsan.
            Tellus elementum vestibulum morbi vitae arcu mi sodales adipiscing.
            Consectetur et convallis aenean risus amet eu accumsan sed rhoncus.
          </span>

          <div className="FrontPage-about-bottom-imgright"></div>
        </div>
      </div>

      <div className="FrontPage-subscriptions">
        <div className="FrontPage-subscriptions-inner">
          <div className="FrontPage-subscriptions-inner-title">Підписка</div>
          <span className="FrontPage-subscriptions-inner-description">Lorem ipsum dolor sit amet consectetur. Lacus semper arcu pellentesque eu.</span>
          <div className="FrontPage-subscriptions-inner-switch">
            <div className="FrontPage-subscriptions-inner-switch-inner">
              <span>Помісячно</span>
              <Switch toggle={(active)=>{setSwitchActive(active)}}/>
              <span>На рік</span>
            </div>
            <div className='FrontPage-subscriptions-inner-switch-sale'>Знижка {pageData.yearDiscount}%</div>
          </div>
          <div className="FrontPage-subscriptions-inner-cards">
            {pageData.subscriptions.map((item,index)=>{
              return <Card key={index} item={item} switchActive={switchActive}/>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FrontPage