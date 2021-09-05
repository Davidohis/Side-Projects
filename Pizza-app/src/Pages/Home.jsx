import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import { productData, productDataTwo } from '../components/Products/data';
import Feature from '../components/Feature';

function Home() {
  return (
    <>
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo} />
    </>
  );
}

export default Home;
