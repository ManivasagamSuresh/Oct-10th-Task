import React from "react";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Product_card({ item }) {
  return (
    <div className="col-lg-4 mt-3">
      <div class="card" style={{ width: "18rem" }}>
        <img
          src="https://productmanagementfestival.com/wp-content/uploads/2017/01/sell-your-product-online.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{item.name}</h5>
          <h5 class="card-text">${item.price}</h5>
          <Link to={`Editproducts/${item.id}`} class="btn btn-primary">
            Edit_Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product_card;
