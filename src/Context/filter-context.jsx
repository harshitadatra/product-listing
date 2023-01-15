import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../Reducer/filter-reducer"; 

const FilterContext = createContext();

const initialValue = {
  gender: { men: false, women: false },
  brand: { adidas: false, allenSolly: false, nike: false },
  size: { small: false, medium: false, large: false },
  sortBy: "",
};

const FilterProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialValue
  );
  return (
    <FilterContext.Provider value={{ productState, productDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useProduct = () => useContext(FilterContext);

export { FilterProvider, useProduct };
