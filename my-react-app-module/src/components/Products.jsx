import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import products from "../data/products";

function Products(props) {
  // const [heartcheck, setHeartcheck] = useState(false);
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };

  // const [liked, SetLiked] = useState(false);

  const liked = props.wishList.filter((wish) => wish.id === products.id)[0];

  return (
    <div className="product-card">
      <div className="product-img-container">
        <img src={props.imgUrl} alt="image" />
        <a
          onClick={() => {
            console.log("clicked");
            // SetLiked(!liked);
            if (!liked) {
              const likedProduct = {
                title: props.title,
                price: props.price,
                img: props.imgUrl,
                liked: true,
              };
              props.setWishList([...props.wishList, likedProduct]);
            } else {
              props.setWishList(
                props.wishList.filter((w) => w.id !== products.id)
              );
            }
          }}
        >
          {liked ? (
            <i className="bi bi-heart-fill"></i>
          ) : (
            <i className="bi bi-heart"></i>
          )}
        </a>
      </div>
      <div className="product-text">
        <div className="">
          <p>{props.title}</p>
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
