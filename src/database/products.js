import { v4 as uuid } from "uuid";

const product = [
  {
    id: uuid(),
    imgSrc:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/i/m/j/m-hk9157-adidas-original-imagkzcfszkc3av6.jpeg?q=70",
    title: "Half Sleeve T-Shirt",
    newPrice: 999,
    isOutOfStock: false,
    category: "men",
    brand: "adidas",
    size: "medium",
    count: 1,
  },
  {
    id: uuid(),
    imgSrc:
      "https://rukminim1.flixcart.com/image/612/612/kzd147k0/sweatshirt/o/u/0/xl-gl0653-adidas-original-imagbe8vwu2q86dz.jpeg?q=70",
    title: "Women Sweat Shirt",
    newPrice: 799,
    isOutOfStock: false,
    category: "women",
    brand: "adidas",
    size: "small",
    count: 1,
  },
  {
    id: uuid(),
    imgSrc:
      "https://rukminim1.flixcart.com/image/612/612/kfpq5jk0-0/shirt/v/j/v/40-assfqmof424659-allen-solly-original-imafw3k83dw9p7ce.jpeg?q=70",
    title: "Men Solid Shirt",
    newPrice: 699,
    isOutOfStock: false,
    category: "men",
    brand: "allenSolly",
    size: "medium",
    count: 1,
  },
  {
    id: uuid(),
    imgSrc:
      "https://rukminim1.flixcart.com/image/612/612/kod858w0/t-shirt/t/f/r/l-ahkccrgpk92055-allen-solly-original-imag2u94sywegvbm.jpeg?q=70",
    title: "Solid Women Round Nec",

    newPrice: 499,
    isOutOfStock: false,
    category: "women",
    brand: "allenSolly",
    size: "small",
    count: 0,
  },
  {
    id: uuid(),
    imgSrc:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/7/z/-original-imaghg2fps6mex6r.jpeg?q=70",
    title: "Men Checks Shirt",
    newPrice: 1200,
    isOutOfStock: false,
    category: "men",
    brand: "nike",
    size: "large",
    count: 0,
  },
  {
    id: uuid(),
    imgSrc:
      "https://rukminim1.flixcart.com/image/612/612/kjkbv680-0/track-pant/e/s/n/s-13132454-nike-original-imafz3mdjncwdy6z.jpeg?q=70",
    title: "Women Trackpant",
    newPrice: 1200,
    isOutOfStock: false,
    category: "women",
    brand: "nike",
    size: "large",
    count: 0,
  },
];

export { product };
