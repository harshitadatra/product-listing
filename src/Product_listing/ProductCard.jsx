import React from 'react'
export const ProductCard = ({item}) => {
  return (
    <>
      <div className="product-card-container">
        <img alt="product" className="product-image" src={item.imgSrc}></img>
        <div className="product-title">{item.title}</div>
        <div className="brand-details">
          <div className="brand-name"> {item.brand}</div>
          <div className="brand-price">Rs{item.newPrice}</div>
        </div>

        <div className="size">Size : {item.size}</div>
        <button className="add-to-cart-button"> Add to cart</button>
      </div>
    </>
  );
}


