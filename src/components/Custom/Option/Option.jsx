import React from 'react'
import "./Option.scss"
const Option = ({item}) => {
    return (
        <div className="Option">
            <img src={item.iconURL} alt={item.title} />
            <div className="Option-text">
                <h4 className="Option-text-title">{item.title}</h4>
                <p>{item.description}</p>
            </div>
        </div>
    )
}

export default Option