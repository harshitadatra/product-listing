import React from 'react'
import { useProduct } from '../Context/filter-context';

const Filter = () => {
     const { productState, productDispatch } = useProduct();
     const { gender, brand, size, sortBy } = productState;
  return (
    <>
      <section className="aside-container">
        <h3>
          Filters{" "}
          <span
            className="clear-filter"
            onClick={() => productDispatch({ type: "CLEAR_FILTER" })}
          >
            Clear all
          </span>
        </h3>
        <h4>Sizes</h4>
        <div>
          <label>
            {" "}
            <input
              type="checkbox"
              checked={size.small}
              onChange={() => productDispatch({ type: "SIZE_SMALL" })}
            />{" "}
            Small
          </label>
        </div>
        <div>
          <label>
            {" "}
            <input
              type="checkbox"
              checked={size.medium}
              onChange={() => productDispatch({ type: "SIZE_MEDIUM" })}
            />{" "}
            Medium
          </label>
        </div>
        <div>
          <label>
            {" "}
            <input
              type="checkbox"
              checked={size.large}
              onChange={() => productDispatch({ type: "SIZE_LARGE" })}
            />{" "}
            Large
          </label>
        </div>
        <h4>Brand</h4>
        <div>
          <label>
            <input
              type="checkbox"
              checked={brand.adidas}
              onChange={() => productDispatch({ type: "BRAND_ADIDAS" })}
            />{" "}
            Adidas
          </label>
        </div>
        <div>
          <label>
            {" "}
            <input
              type="checkbox"
              checked={brand.allenSolly}
              onChange={() => productDispatch({ type: "BRAND_ALLEN_SOLLY" })}
            />{" "}
            Allen Solly
          </label>
        </div>
        <div >
          <label>
            <input
              type="checkbox"
              checked={brand.nike}
              onChange={() => productDispatch({ type: "BRAND_NIKE" })}
            />{" "}
            Nike
          </label>
        </div>
        <h4>Ideal for</h4>
        <div>
          <label>
            {" "}
            <input
              type="checkbox"
              checked={gender.men}
              onChange={() => productDispatch({ type: "FILTER_BY_MEN" })}
            />{" "}
            Men
          </label>
        </div>
        <div >
          <label>
            <input
              type="checkbox"
              checked={gender.women}
              onChange={() => productDispatch({ type: "FILTER_BY_WOMEN" })}
            />{" "}
            Women
          </label>
        </div>
        <h4>Sort by</h4>
        <div>
          <label>
            <input
              type="radio"
              name="sortby"
              checked={sortBy === "LOW_TO_HIGH"}
              onChange={() =>
                productDispatch({ type: "SORT_BY", payload: "LOW_TO_HIGH" })
              }
            />{" "}
            Low to High
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="sortby"
              checked={sortBy === "HIGH_TO_LOW"}
              onChange={() =>
                productDispatch({ type: "SORT_BY", payload: "HIGH_TO_LOW" })
              }
            />{" "}
            High to low
          </label>
        </div>
      </section>
    </>
  );
}

export default Filter
