import React from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from '../Products/ProductsElements';
import styled from 'styled-components';

export const ProductCards = styled.div`
display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 60%;;
`;

export const CardList = styled.div`
width:  640px;
flex-wrap: wrap;
box-sizing: border-box;
`;

export default function ProductList(props) {
  const { product, onAdd } = props;
  return (
    <div>
       <ProductImg src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.desc}</p>
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>

   
          // <ProductCards>
          //   <CardList>
          //   <ProductImg src={product.image} alt={product.name} />
            
          //     <ProductTitle>{product.name}</ProductTitle>
          //     <ProductDesc>{product.desc}</ProductDesc>
          //     <ProductPrice>${product.price}</ProductPrice>
          //     <ProductButton onClick={() => onAdd(product)}>Add To Cart</ProductButton>
          //   </CardList>
          // </ProductCards>


  );
}
