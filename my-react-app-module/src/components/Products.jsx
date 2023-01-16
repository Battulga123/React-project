import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'


function Products(props) {

    const [heartcheck, setHeartcheck] = useState(false)
    const [rating, setRating] = useState(0)
    const handleRating = (rate) => {
        setRating(rate)
    }
    // const onPointerEnter = () => console.log('Enter')
    // const onPointerLeave = () => console.log('Leave')
    // const onPointerMove = (value, index) => console.log(value, index)

    function handleUpVote(props) {
        console.log('clicked')
        console.log(props.title)
    }



    // const [wished, setWished] = useState ([])


    function handleWish(event) {
        const heart = {
            img: event.imgUrl,
            title: event.title
        }
        console.log(heart)
        if (heartcheck) {
            props.setWishList(props.wishList + 1)
        } else {
            props.setWishList(props.wishList - 1)
        }

    }
    // setWished([...wished, heart])

    console.log(handleWish)


    return (
        <div className="product-card">
            <div className="product-img-container">
                <img src={props.imgUrl} alt="image" />
                <img src='./pictures/heart.png' className='heart' onClick={(e) => {
                    setHeartcheck(!heartcheck)
                    handleWish(e)
                }} />
            </div>
            <div className="product-text">
                <div className="">
                    <p onClick={() => { handleUpVote(props) }}>{props.title}</p>
                </div>
                <div className="">${props.price}</div>
                <div className='product-ratings'>
                    <Rating
                        onClick={handleRating}
                        // onPointerEnter={onPointerEnter}
                        // onPointerLeave={onPointerLeave}
                        // onPointerMove={onPointerMove}
                        initialValue={props.rating}
                        allowFraction={true}
                        size={15}
                    />
                </div>
                <div className="basket-icon text-center text-black">
                    <i class="bi bi-cart3"></i>
                </div>
            </div>



        </div>

    )
}
export default Products