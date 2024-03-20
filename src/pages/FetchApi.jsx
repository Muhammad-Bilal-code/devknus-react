import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const FetchApi = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    try {
      const res = await fetch("https://myfirstapi-data.vercel.app");
      const data = await res.json();
      console.log(data);
      console.log(data.products);
      setProducts(data.products);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("PRODUCTS", products);
  return (
    <div className="flex flex-wrap">
      {loading ? (
        products.map((val, index) => (
          <ProductCard
            id={val.id}
            description={val.description}
            image={val.image}
            price={val.price}
            title={val.title}
          />
        ))
      ) : (
        <h2 className="text-5xl">Loading</h2>
      )}
    </div>
  );
};

export default FetchApi;
