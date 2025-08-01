import React, { useState } from 'react'
import './FeedbackForm.scss'
import '../../pages/FrontPage/FrontPage.scss'
import { LANG } from '../../pageData'
import fscreenMan from "../../../img/frontpage/fscreen-man.png"
import { NavLink } from 'react-router-dom'

const FeedbackForm = ({ isModal = false, close }) => {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch('/sender.php', {
        method: 'POST',
        body: formData
      })

      const result = await response.json()

      if (result.status) {
        setStatus({ success: true, message: result.message })
        form.reset()
      } else {
        setStatus({ success: false, message: result.message })
      }
    } catch (error) {
      setStatus({ success: false, message: 'Сталася помилка при надсиланні.' })
    }
  }

  return (
    <form
      className="FeedbackForm feedback-react-form"
      onSubmit={handleSubmit}
      noValidate
      style={{ width: isModal ? "" : "100%" }}
    >
      {!isModal && (
        <section className='FeedbackForm-img'>
          <img src={fscreenMan} alt={LANG.ua.deco} />
        </section>
      )}

      <h3 className="FeedbackForm-title">{LANG.ua.feedback_form.title}</h3>

      <input
        id="first_name"
        name="first_name"
        type="text"
        placeholder={LANG.ua.feedback_form.name}
        className="FeedbackForm-input"
        required
      />

      <input
        id="phone_number"
        name="phone_number"
        type="tel"
        placeholder={LANG.ua.feedback_form.phone}
        className="FeedbackForm-input"
        required
      />

      {/* CAPTCHA якщо є */}

      <label htmlFor="terms" className="FeedbackForm-terms">
        <input type="checkbox" id="terms" name="terms" required className="FeedbackForm-terms-input" />
        <p>
          {LANG.ua.feedback_form.personal_data_start}
          <NavLink to="/terms" className="FeedbackForm-terms-link">
            {LANG.ua.feedback_form.personal_data_end}
          </NavLink>
        </p>
      </label>

      {status && (
        <p
          className={`FeedbackForm-status ${status.success ? 'success' : 'error'}`}
          style={{ marginBottom: '1em' }}
        >
          {status.message}
        </p>
      )}

      <div className="FeedbackForm-footer">
        <button type="submit" className="FeedbackForm-submit">
          {LANG.ua.feedback_form.send}
        </button>
        {isModal && (
          <button type="button" className="FeedbackForm-close" onClick={close}>
            {LANG.ua.feedback_form.close}
          </button>
        )}
      </div>
    </form>
  )
}

export default FeedbackForm