import React from 'react'
import {ProductCard} from './ProductCard';
import { product } from '../database/products';
import { useProduct } from '../Context/filter-context';
import {
  sortProduct,
  filterProductByBrand,
  filterProductBySize,
  filterProductByGender,
} from "../Utlis/filter-utlis";
import Filter from './Filter';


export const ProductPage = () => {
 const { productState } = useProduct();

  const productBySize = filterProductBySize(product, productState.size);
  const productByBrand = filterProductByBrand(
    productBySize,
    productState.brand
  );
  const productByGender = filterProductByGender(
    productByBrand,
    productState.gender
  );
  const finalProduct = sortProduct(productByGender, productState.sortBy);
  return (
    <>
      <div className="product-list-container">
        <Filter/>
       
        <main className="main-container">
          {finalProduct.map((item) => (
            <ProductCard key={item._id} item={item} />
          ))}
        </main>
      </div>
    </>
  );
}


