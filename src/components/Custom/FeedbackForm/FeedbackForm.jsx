import React, { useState } from 'react'
import './FeedbackForm.scss'
import '../../pages/FrontPage/FrontPage.scss'
import { LANG } from '../../pageData';
import fscreenMan from "../../../img/frontpage/fscreen-man.png"
const FeedbackForm = ({ isModal = false, close }) => {
    const [data, setData] = useState({
        name: "",
        phone: "",
        terms: false
    })
    const validation = ()=>{
        return data.terms && data.name.trim().length!==0 && data.phone.length>=10
    }
    const dataHandler = (key, value) => {
        setData({ ...data, [key]: value })
    }
    const checkboxHandler = ()=>{
        setData({...data, terms:!data.terms})
    }
    const submitHandler = () => {
    }
    return (
        <form className='FeedbackForm' id='feedbackForm' onClick={(e)=>{e.stopPropagation()}} onSubmit={submitHandler} style={{ width: isModal ? "" : "100%" }}>
            {!isModal && <section className='FeedbackForm-img'>
                <img src={fscreenMan} alt={LANG.ua.deco} />
            </section>}
            <h3 className="FeedbackForm-title">{LANG.ua.feedback_form.title}</h3>
            <input type="text" placeholder={LANG.ua.feedback_form.name} className="FeedbackForm-input" value={data.name} onChange={(e) => { dataHandler("name", e.target.value) }} />
            <input type="number" placeholder={LANG.ua.feedback_form.phone} className="FeedbackForm-input" value={data.phone} onChange={(e) => { dataHandler("phone", e.target.value) }} />
            <label htmlFor="terms" className="FeedbackForm-terms">
                <input type="checkbox" id='terms' className="FeedbackForm-terms-input" onChange={checkboxHandler}/>
                <p>{LANG.ua.feedback_form.personal_data_start} <a className='FeedbackForm-terms-link' href="/terms">{LANG.ua.feedback_form.personal_data_end}</a></p>
            </label>
            <div className="FeedbackForm-footer">
                <button disabled={!validation()} className={!validation()?"FeedbackForm-submit-disabled":"FeedbackForm-submit"}>
                    {LANG.ua.feedback_form.send}</button>
                {isModal && <button className="FeedbackForm-close" onClick={close}>{LANG.ua.feedback_form.close}</button>}
            </div>
        </form>
    )
}

export default FeedbackForm;