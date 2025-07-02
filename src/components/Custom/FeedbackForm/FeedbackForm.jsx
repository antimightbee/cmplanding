import React, { useState } from 'react'
import './FeedbackForm.scss'
import '../../FrontPage/FrontPage.scss'
import { LANG } from '../../pageData';
import fscreenMan from "../../../img/frontpage/fscreen-man.png"
const FeedbackForm = ({ isModal = false, close }) => {
    const [data, setData] = useState({
        name: "",
        phone: "",
        terms: false
    })
    const dataHandler = (key, value) => {
        setData({ ...data, [key]: value })
    }
    const submitHandler = () => {

    }
    return (
        <form className='FeedbackForm' onSubmit={submitHandler} style={{ width: isModal ? "" : "100%" }}>
            {!isModal && <section className='FeedbackForm-img'>
                <img src={fscreenMan} alt={LANG.ua.deco} />
            </section>}
            <div className="FeedbackForm-title">{LANG.ua.feedback_form.title}</div>
            <input type="text" placeholder={LANG.ua.feedback_form.name} className="FeedbackForm-input" value={data.name} onChange={(e) => { dataHandler("name", e.target.value) }} />
            <input type="number" placeholder={LANG.ua.feedback_form.phone} className="FeedbackForm-input" value={data.phone} onChange={(e) => { dataHandler("phone", e.target.value) }} />
            <label htmlFor="terms" className="FeedbackForm-terms">
                <input type="checkbox" id='terms' className="FeedbackForm-terms-input" />
                <span>{LANG.ua.feedback_form.personal_data_start} <a className='FeedbackForm-terms-link' href="#">{LANG.ua.feedback_form.personal_data_end}</a></span>
            </label>
            <div className="FeedbackForm-footer">
                <button className="FeedbackForm-submit">{LANG.ua.feedback_form.send}</button>
                {isModal && <button className="FeedbackForm-close" onClick={close}>{LANG.ua.feedback_form.close}</button>}
            </div>
        </form>
    )
}

export default FeedbackForm;