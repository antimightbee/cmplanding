import "./Option.scss"
const Option = ({item}) => {
    return (
        <section className="Option">
            <img src={item.iconURL} alt={item.title} />
            <div className="Option-text">
                <h4 className="Option-text-title">{item.title}</h4>
                <p>{item.description}</p>
            </div>
        </section>
    )
}

export default Option