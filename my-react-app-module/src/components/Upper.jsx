import React from "react";


function Upper() {
    return (
        <div className="upper-container">
            <div>
                <p>Need help? Call us: (+98) 0234 456 789</p>
            </div>
            <div className="upper-right">
                <div className="upper-location">
                    <img src="./pictures/location.png" alt="" />
                    <p> Our store</p>
                </div>
                <div className="upper-car">
                    <img src="./pictures/car.png" alt="" />
                    <p>Track your order</p>
                </div>
            </div>
        </div>
    )
}


export default Upper