import "./Package.css"

function PackageData(props){
    return(
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="image" />

            </div>

            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <button>{props.butto}</button>
        </div>
    )
}

export default PackageData