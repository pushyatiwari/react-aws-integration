import React from 'react';
import './App.css';
import product1 from "./images/product1.jpg"
import product2 from './images/product2.jpg';
import product3 from './images/product3.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>My AWS + S3 + CloudFront Demo</h2>
        <p>Here are some sample product images served via CloudFront</p>

        <div className="product-gallery">
          <img src={product1} alt="Product 1" className="product-img" />
          <img src={product2} alt="Product 2" className="product-img" />
          <img src={product3} alt="Product 3" className="product-img" />
        </div>
         <div className="product-gallery">
          <img src={product3} alt="Product 3" className="product-img" />
          <img src={product1} alt="Product 1" className="product-img" />
          <img src={product2} alt="Product 2" className="product-img" />



        </div>
      </header>
    </div>
  );
}

export default App;
