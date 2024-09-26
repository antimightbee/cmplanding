import React from 'react'
import './FrontPage.scss'
import Header from '../Header/Header'
const FrontPage = () => {
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
    </div>
  )
}

export default FrontPage