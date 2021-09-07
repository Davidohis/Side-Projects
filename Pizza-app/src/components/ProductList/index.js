import React from 'react';

export default function ProductList(props) {
  const { product, onAdd } = props;
  return (

      <div className="row" style={{display: 'flex'}}>
          <div className="col-2">
              <img className="small" src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <div>${product.price}</div>
                <div className="btn">
                  <button onClick={() => onAdd(product)}>Add To Cart</button>
                </div>
            </div>
      </div>
  );
}
