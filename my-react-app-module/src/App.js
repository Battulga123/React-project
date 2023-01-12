import './App.css';
import MainMenu from '../src/components/MainMenu';
import Upper from './components/Upper'
import Search from './components/search'
import ProductSlider from './components/productSlider';
import Products from './components/Products';
import Category from './components/Category';
import AboutUs from './components/AboutUs';

import AliceCarousel from 'react-alice-carousel'

import categoryData from './data/category';
import productsData from './data/products';
import aboutUsData from './data/AboutUs';

function App() {

  const categories = categoryData.map(data => {
    return (
      <Category
        title={data.title}
        imgUrl={data.imgUrl}
        items={data.items}
      />
    )
  })

  const products = productsData.map(data => {
    return (
      <Products
        title={data.title}
        imgUrl={data.imgUrl}
        price={data.price}
        rating={data.rating}
      />
    )

  })

  const aboutUs = aboutUsData.map(data => {
    return (
      <AboutUs
        url={data.url}
        name={data.name}
        about={data.about}
      />
    )
  })




  return (
    <div className="App">
      <header className="App-header">

        <Upper />
        <Search />
        <MainMenu />
        <div className='content-container'>
          <ProductSlider />

          {/* Categories */}
          <AliceCarousel
            responsive={{
              0: { items: 3 }
            }}>
            {categories}
          </AliceCarousel>

          {/*Popular Product */}
          <div className='popular-products'>
            <div className='popular-text'>
              <p>Popular product</p>
            </div>
            <div className='popular-btn'>
              <button>Laptops</button>
              <button>Tablets</button>
              <button>Mouse</button>
            </div>
          </div>


          {/* Product */}
          <AliceCarousel
            responsive={{
              0: {
                items: 4
              },
            }}>

            {products}

          </AliceCarousel>


          {/* Banner */}
          <div className='banner-container1'>
            <div className='row'>
              <div className='col-6'></div>
              <div className='col-6 text-center'>
                <button>New laptops</button>
                <p>Sale up to 50% off</p>
                <p>12 inch hd display</p>
                <button>Show now</button>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className='description'>
            <div className='description1'>
              <div>
                <img src='pictures/box-tick.png'></img>
              </div>
              <div>
                <p>Free delivery</p>
                <p>on order above $50,00</p>
              </div>
            </div>
            <div className='description3'>
              <div>

                <img src='pictures/crown.png'></img>
              </div>
              <div>
                <p>Best quality </p>
                <p>best quality in low price</p>
              </div>
            </div>

            <div className='description3'>
              <div>
                <img src='pictures/shield-security.png'></img>
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
                items: 3
              }
            }}

          >
            {aboutUs}
          </AliceCarousel>

          {/* Logos*/}
          <div className='logos'>
            <img src='./pictures/brand-4.png'></img>
            <img src='./pictures/brand-5.png'></img>
            <img src='./pictures/brand-6.png'></img>
            <img src='./pictures/brand-7.png'></img>
            <img src='./pictures/brand-8.png'></img>
          </div>

          {/* Lastest news */}






        </div>
      </header >
    </div >
  );
}

export default App;
