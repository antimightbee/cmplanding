import React, { useState } from 'react'
import './Switch.scss'

const Switch = ({toggle}) => {
    const [active, setActive] = useState(false)
    const [transformPx, setTransformPx] = useState("")
    const toggleTransform = (arg)=>{
        if(arg){
            setTransformPx(50)
        }else{
            setTransformPx(0)
        }
    }
    const toggleSwitch = ()=>{
        setActive(!active)
        toggleTransform(!active)
        toggle(!active)
    }
  return (
    <div className={`Switch ${active && "Switch-active"}`}>
        <div className="Switch-head" style={{transform:`translate(${transformPx}px)`}} tabIndex={0} onClick={toggleSwitch}></div>
    </div>
  )
}

export default Switch