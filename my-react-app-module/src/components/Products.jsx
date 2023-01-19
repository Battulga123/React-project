import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function Products(props) {
  const [heartcheck, setHeartcheck] = useState(false);
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };

  function handleUpVote(props) {
    console.log("clicked");
    console.log(props.title);
  }

//   function handleWish(event) {
//     const heart = {
//       img: event.imgUrl,
//       title: event.title,
//     };
//     console.log(heart);
//     if (heartcheck) {
//       props.setWishList(props.wishList + 1);
//     } else {
//       props.setWishList(props.wishList - 1);
//     }
//   }
//   console.log(handleWish);


    const [liked, SetLiked] = useState(false)

  return (
    <div className="product-card">
      <div className="product-img-container">
        <img src={props.imgUrl} alt="image" />
        <a 
        onClick={()=> {console.log('clicked')
        SetLiked(!liked)
        if(!liked) {
            const likedProduct = {
                title: props.title,
                price: props.price,
                img: props.imgUrl,
                liked: true
            }
            /* like darsan uyed*/
        }
  }
    }
        
        
        
        
        >
        {/* <i
          class="bi bi-heart"
          onClick={(e) => {
            setHeartcheck(!heartcheck);
            handleWish(e);
          }}
        ></i> */}
        {liked ? (
              <i className="bi bi-heart-fill"></i>
            ) : (
              <i className="bi bi-heart"></i>
            )}
        </a>
      </div>
      <div className="product-text">
        <div className="">
          <p
            onClick={() => {
              handleUpVote(props);
            }}
          >
            {props.title}
          </p>
        </div>
        <div className="">${props.price}</div>
        <div className="product-ratings">
          <Rating
            onClick={handleRating}
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
  );
}
export default Products;
