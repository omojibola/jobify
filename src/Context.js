import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

const ContextDataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const getProducts = async () => {
    const BASE_URL = 'https://fakestoreapi.com/products';
    setLoading(true);
    const res = await fetch(BASE_URL);
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addToCart = (id) => {
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product.id === id;
      });
      setCart([...cart, ...data]);
      console.log(cart);
    } else {
      alert('Product is already in cart');
    }
  };
  return (
    <DataContext.Provider value={{ products, cart, addToCart, total }}>
      {children}
    </DataContext.Provider>
  );
};

export default ContextDataProvider;
