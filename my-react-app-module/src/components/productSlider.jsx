import React from "react";

function ProductSlider() {
    return (
        <div className="row banner-container">
            <div className="col-5 banner-text">
                <div className="text1">
                    Canon <br /> camera
                </div>
    
                <div className="button1">
                    <button type='button' className="btn btn-warning text-white"> Shop Now</button>
                    <button type="button" className="btn btn-outline-light text-dark border">View More</button>
                </div>
            </div>

            <div className="col-2">
            </div>

            <div className="col-5 promotion" style={{ position: 'relative' }}>
                <div className="promotion-price text-center">Only<br /> $89</div>
                <div className="banner-img-container">
                    <img src="pictures/8 1.png" alt="" />
                </div>

            </div>
        </div >
    )

}


export default ProductSlider