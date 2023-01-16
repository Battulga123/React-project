function Category(props) {
    return (
        <div className="category-container">
            <div className="category-card d-flex">
                <div className="card-img-container">
                    <img src={props.imgUrl} alt="image" />
                </div>
                <div className="category-text">
                    <div className="title">{props.title}</div>
                    <div className="item">{props.items}</div>
                </div>

            </div>
        </div>
    )
}

export default Category