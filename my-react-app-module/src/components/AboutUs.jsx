import aboutUsData from "../data/AboutUs"

function AboutUs(props) {
    return (
        <div className="aboutUs-container">
            <div className="aboutUs-upper">
                <img src={props.url} alt="" />
                <p>{props.name}</p>
            </div>
            <p className="aboutUs-bottom">{props.about}</p>
        </div>
    )
}

export default AboutUs