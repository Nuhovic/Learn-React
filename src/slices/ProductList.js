// ProductList.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, addToCart } from "./path/to/eCommerceSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.eCommerce.products);

  useEffect(() => {
    // Simulacija dohvatanja proizvoda sa servera
    const fetchedProducts = [
      { id: 1, name: "Product 1", price: 10 },
      { id: 2, name: "Product 2", price: 20 },
      // Dodajte ostale proizvode ovdje
    ];

    dispatch(setProducts(fetchedProducts));
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}{" "}
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
