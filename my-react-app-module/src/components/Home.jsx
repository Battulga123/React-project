import MainMenu from "../components/MainMenu";
import Upper from "../components/Upper";
import Search from "../components/search";
import ProductSlider from "../components/productSlider";
import Products from "../components/Products";
import Category from "../components/Category";
import AboutUs from "../components/AboutUs";
import Latest from "../components/LatestNews";
import Footer from "../components/Footer";
import AliceCarousel from "react-alice-carousel";

import categoryData from "../data/category";
import productsData from "../data/products";
import aboutUsData from "../data/AboutUs";
import LatestNewsData from "../data/LatestNews";
import { useState } from "react";

export default function Home() {
  const [wishList, setWishList] = useState([]);
  const categories = categoryData.map((data) => {
    return (
      <Category title={data.title} imgUrl={data.imgUrl} items={data.items} />
    );
  });
  const products = productsData.map((data) => {
    return (
      <Products
        title={data.title}
        imgUrl={data.imgUrl}
        price={data.price}
        rating={data.rating}
        wishList={wishList}
        setWishList={setWishList}
      />
    );
  });

  const aboutUs = aboutUsData.map((data) => {
    return <AboutUs url={data.url} name={data.name} about={data.about} />;
  });

  const latestnews = LatestNewsData.map((data) => {
    return (
      <Latest
        imgUrl={data.imgUrl}
        date={data.date}
        title={data.title}
        detail={data.detail}
        source={data.source}
      />
    );
  });

  return (
    <div>
      <Upper />
      <Search wishList={wishList} setWishList ={setWishList}/>
      <MainMenu />
      <div className="content-container">
        <ProductSlider />

        {/* Categories */}
        <AliceCarousel
          responsive={{
            0: { items: 3 },
          }}
        >
          {categories}
        </AliceCarousel>

        {/*Popular Product */}
        <div className="popular-products">
          <div className="popular-text">
            <p>Popular product</p>
          </div>
          <div className="popular-btn">
            <button>Laptops</button>
            <button>Tablets</button>
            <button>Mouse</button>
          </div>
        </div>

        {/* Product */}
        <AliceCarousel
          responsive={{
            0: {
              items: 4,
            },
          }}
        >
          {products}
        </AliceCarousel>

        {/* Banner */}
        <div className="banner-container1">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6 text-center">
              <button>New laptops</button>
              <p>Sale up to 50% off</p>
              <p>12 inch hd display</p>
              <button>Show now</button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="description">
          <div className="description1">
            <div>
              <img src="pictures/box-tick.png"></img>
            </div>
            <div>
              <p>Free delivery</p>
              <p>on order above $50,00</p>
            </div>
          </div>
          <div className="description3">
            <div>
              <img src="pictures/crown.png"></img>
            </div>
            <div>
              <p>Best quality </p>
              <p>best quality in low price</p>
            </div>
          </div>

          <div className="description3">
            <div>
              <img src="pictures/shield-security.png"></img>
            </div>
            <div>
              <p>1 year warranty</p>
              <p>Avaliable warranty</p>
            </div>
          </div>
        </div>

        {/* About us */}
        <AliceCarousel
          responsive={{
            0: {
              items: 3,
            },
          }}
        >
          {aboutUs}
        </AliceCarousel>

        {/* Logos*/}
        <div className="logos">
          <img src="./pictures/brand-4.png"></img>
          <img src="./pictures/brand-5.png"></img>
          <img src="./pictures/brand-6.png"></img>
          <img src="./pictures/brand-7.png"></img>
          <img src="./pictures/brand-8.png"></img>
        </div>

        {/* Lastest news */}
        <div>
          <p className="latest"> Latest news</p>
          <AliceCarousel
            responsive={{
              0: {
                items: 2,
              },
            }}
          >
            {latestnews}
          </AliceCarousel>
        </div>
      </div>
      <Footer />
    </div>
  );
}
