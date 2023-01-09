import './App.css';
import MainMenu from '../src/components/MainMenu';
import Upper from './components/Upper'
import Search from './components/search'
import ProductSlider from './components/productSlider';
import Products from './components/Products';
import Category from './components/Category';

import AliceCarousel from 'react-alice-carousel'

import categoryData from './data/category';
import productsData from './data/products';

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

  return (
    <div className="App">
      <header className="App-header">
        <div className='Upper'>

          <Upper />
          <Search />
          <MainMenu />
          <div className='content-container'>
            <ProductSlider />


            <AliceCarousel
              responsive={{
                0: { items: 3 }
              }}>
              {categories}
            </AliceCarousel>

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

            <AliceCarousel autoPlay autoPlayInterval="3000"
              responsive={{
                0: {
                  items: 4
                },
              }}>

              {products}

            </AliceCarousel>

          </div>
        </div>

      </header>
    </div>
  );
}

export default App;