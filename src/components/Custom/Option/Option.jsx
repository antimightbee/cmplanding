import React from 'react'
import "./Option.scss"
const Option = ({item}) => {
    return (
        <div className="Option">
            <img src={item.iconURL} alt={item.title} />
            <div className="Option-text">
                <span className="Option-text-title">{item.title}</span>
                <span>{item.description}</span>
            </div>
        </div>
    )
}

export default Option