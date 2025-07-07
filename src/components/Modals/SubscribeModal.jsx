import React from 'react'
import FeedbackForm from "../Custom/FeedbackForm/FeedbackForm"
import "./Modal.scss"
const SubscribeModal = ({close}) => {
  return (
    <div className='Modal' onClick={close}>
        <FeedbackForm isModal close={close}/>
    </div>
  )
}

export default SubscribeModal