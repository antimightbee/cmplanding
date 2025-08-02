import React, { useEffect, useState } from 'react'
import './FeedbackForm.scss'
import '../../pages/FrontPage/FrontPage.scss'
import { LANG } from '../../pageData'
import fscreenMan from "../../../img/frontpage/fscreen-man.png"
import { NavLink } from 'react-router-dom'

const FeedbackForm = ({ isModal = false, close }) => {
  const cooldown_time = 5
  const [data, setData] = useState({
    first_name: "",
    phone_number: "",
    terms: false
  })
  const [canSubmit, setCanSubmit] = useState(true)
  const [status, setStatus] = useState(null)
  const dataHandler = (key, value) => {
    setData({ ...data, [key]: value })
  }
  useEffect(() => {
    const checkCooldown = () => {
      const last = localStorage.getItem("last_submited")
      if (last) {
        const diff = Date.now()- last
        setCanSubmit(diff >= cooldown_time * 60 * 1000)
      }
    }

    checkCooldown()
    const interval = setInterval(checkCooldown, 10000)
    return () => clearInterval(interval)
  }, [])

  const validate = () => {
    return (
      data.first_name.trim().length > 0 &&
      data.phone_number.trim().length > 9 &&
      data.terms &&
      canSubmit
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('/sender.php', {
        method: 'POST',
        body: new FormData(e.target)
      })

      const result = await response.json()
      if (result.status) {
        localStorage.setItem("last_submited", Date.now())
        setCanSubmit(false)
        setData({ first_name: "", phone_number: "", terms: false })
        setStatus({ success: true, message: result.message })
      } else {
        setStatus({ success: false, message: result.message })
      }
    } catch (error) {
      setStatus({ success: false, message: error.message })

    }
  }

  return (
    <form
      className="FeedbackForm feedback-react-form"
      onSubmit={handleSubmit}
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
        value={data.first_name}
        onChange={(e) => dataHandler("first_name", e.target.value)}
        required
      />

      <input
        id="phone_number"
        name="phone_number"
        type="tel"
        placeholder={LANG.ua.feedback_form.phone}
        className="FeedbackForm-input"
        value={data.phone_number}
        onChange={(e) => dataHandler("phone_number", e.target.value)}
        required
      />

      {/* CAPTCHA якщо є */}

      <label htmlFor="terms" className="FeedbackForm-terms">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          checked={data.terms}
          onChange={(e) => dataHandler("terms", e.target.value)}
          className="FeedbackForm-terms-input"
          required
        />
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
        <button
          type="submit"
          disabled={!validate()}
          className={!validate() ? "FeedbackForm-submit-disabled" : "FeedbackForm-submit"}
        >
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
