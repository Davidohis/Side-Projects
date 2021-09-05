import React from 'react';
import ProductList from '../ProductList';

export default function ShopList(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <ProductList key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </main>
  );
}
