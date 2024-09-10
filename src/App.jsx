import './App.css';
import { Api, Api2, Api3,Api4, Api5 } from './Api';

import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { FaUser, FaEllipsisV, FaShoppingCart, FaStoreAlt, FaStar } from 'react-icons/fa';

function App() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);

  useEffect(() => {
    setData(Api);
    setData2(Api2);
    setData3(Api3);
    setData4(Api4);
    setData5(Api5);
  }, []);

  return (
    <div className='app-container'>
      <header className="header">
        <div className="logo">
          <img src="your-logo.png" alt="Flipkart Logo" />
          <span className="explore-plus">Explore <span className="plus">Plus</span></span>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for Products, Brands and More" />
        </div>
        <div className="header-icons">
          <div className="icon">
            <FaUser />
            <span>Login</span>
          </div>
          <div className="icon">
            <FaShoppingCart />
            <span>Cart</span>
          </div>
          <div className="icon">
            <FaStoreAlt />
            <span>Become a Seller</span>
          </div>
          <div className="icon">
            <FaEllipsisV />
          </div>
        </div>
      </header>

      <div className='main-content'>
        <Sidebar />
        <div className='product-container'>
          {data && data.map((item, index) => (
            <div className='product-card' key={index}>
              <div className='product-image'>
                <img src={item.product} alt={item.product_name} />
              </div>
              <p className='product-name'>{item.product_name}</p>

              <div className='rating'>
                <FaStar className='star-icon' />
                <span>{item.rateing}</span>
              </div>

              <div className='pricing'>
                <p className='current-price'>₹{item.current_price}</p>
                <div className='mrp-discount'>
                  <p className='mrp'>₹{item.mrp}</p>
                  <p className='discount'>{item.discount}% off</p>
                </div>
              </div>
            </div>
          ))}
          <div className='product-container'>
            {data2 && data2.map((item, index) => (
              <div className='product-card' key={index}>
                <div className='product-image'>
                  <img src={item.product} alt={item.product_name} />
                </div>
                <p className='product-name'>{item.product_name}</p>

                <div className='rating'>
                  <FaStar className='star-icon' />
                  <span>{item.rateing}</span>
                </div>

                <div className='pricing'>
                  <p className='current-price'>₹{item.current_price}</p>
                  <div className='mrp-discount'>
                    <p className='mrp'>₹{item.mrp}</p>
                    <p className='discount'>{item.discount}% off</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='product-container'>
            {data2 && data3.map((item, index) => (
              <div className='product-card' key={index}>
                <div className='product-image'>
                  <img src={item.product} alt={item.product_name} />
                </div>
                <p className='product-name'>{item.product_name}</p>

                <div className='rating'>
                  <FaStar className='star-icon' />
                  <span>{item.rateing}</span>
                </div>

                <div className='pricing'>
                  <p className='current-price'>₹{item.current_price}</p>
                  <div className='mrp-discount'>
                    <p className='mrp'>₹{item.mrp}</p>
                    <p className='discount'>{item.discount}% off</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='product-container'>
            {data2 && data4.map((item, index) => (
              <div className='product-card' key={index}>
                <div className='product-image'>
                  <img src={item.product} alt={item.product_name} />
                </div>
                <p className='product-name'>{item.product_name}</p>

                <div className='rating'>
                  <FaStar className='star-icon' />
                  <span>{item.rateing}</span>
                </div>

                <div className='pricing'>
                  <p className='current-price'>₹{item.current_price}</p>
                  <div className='mrp-discount'>
                    <p className='mrp'>₹{item.mrp}</p>
                    <p className='discount'>{item.discount}% off</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='product-container'>
            {data2 && data5.map((item, index) => (
              <div className='product-card' key={index}>
                <div className='product-image'>
                  <img src={item.product} alt={item.product_name} />
                </div>
                <p className='product-name'>{item.product_name}</p>

                <div className='rating'>
                  <FaStar className='star-icon' />
                  <span>{item.rateing}</span>
                </div>

                <div className='pricing'>
                  <p className='current-price'>₹{item.current_price}</p>
                  <div className='mrp-discount'>
                    <p className='mrp'>₹{item.mrp}</p>
                    <p className='discount'>{item.discount}% off</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    {/* <div><ImageSlider/></div> */}
    </div>

  );
}

export default App;
