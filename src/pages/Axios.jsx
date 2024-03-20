import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Axios = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const getProducts = () => {
    axios
      .get("https://myfirstapi-data.vercel.app")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        console.log(res.data.products);
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);
  return (
    <div className="flex flex-wrap">
      {loading ? (
        <h2 className="text-5xl">Loading</h2>
      ) : (
        products.map((val, id) => (
          <ProductCard
            id={val.id}
            title={val.title}
            description={val.description}
            image={val.image}
            key={val.id}
          />
        ))
      )}
    </div>
  );
};

export default Axios;
