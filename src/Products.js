import axios from "axios";
import React, { useEffect, useState } from "react";
import Product_card from "./Product_card";

function Products() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    userproduct();
  }, []);
  let userproduct = async () => {
    try {
      let productdata = await axios.get(
        "https://63450500dcae733e8fe7f213.mockapi.io/products"
      );
      console.log(productdata.data);
      setProduct(productdata.data);
    } catch (error) {
      alert("error");
    }
  };
  return (
    <div className="container">
      <div className="row">
        {
        product.map((items) => {
          return <Product_card item={items} />;
        })
        }
      </div>
    </div>
  );
}

export default Products;
