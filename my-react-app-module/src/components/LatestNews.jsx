function Latest(props) {
    return (
        <div className="latest-container">
            <div className="row">
                <div className="col-6">
                    <img src={props.imgUrl}></img>
                </div>
                <div className="col-1 p-0"></div>
                <div className="col-5 p-0">
                    <p className="latest-date">{props.date}</p>
                    <p className="latest-title">{props.title}</p>
                    <p className="latest-detail">{props.detail}</p>
                    <p className="latest-source">{props.source}</p>
                </div>
            </div>
        </div>
    )
}

export default Latest