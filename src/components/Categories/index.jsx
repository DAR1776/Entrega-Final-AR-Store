import "./styles.css"

const Categories = (props) => {

    const onClickCategory = (name) => {
        props.onClick(name)
    }

    return(
        <div 
            className="boton" onClick={() => onClickCategory(props.name)}
        >
            {props.name}
        </div>
    )
}

export default Categories