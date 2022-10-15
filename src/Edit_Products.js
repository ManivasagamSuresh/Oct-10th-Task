import React from "react";

function Edit_Products() {
  return (
    <div className="col-lg-4 mt-3">
      <div class="card" style={{ width: "18rem" }}>
        <img
          src="https://productmanagementfestival.com/wp-content/uploads/2017/01/sell-your-product-online.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">name</h5>
          <h5 class="card-text">$price</h5>
        </div>
      </div>
    </div>
  );
}

export default Edit_Products;
