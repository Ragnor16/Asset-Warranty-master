import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from "../../Repeated/axios";
import "../../Repeated/font2.css";
import "../../Repeated/font.css";
import "./Adddproduct.css";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [productDes, setProductDes] = useState("");

  const addproduct = (e) => {
    e.preventDefault();

    axios
      .post("/ManufactureLand/Product/Addproduct", { productName, productDes })
      .then((res) => {
        if (res.data.message === "success") {
          alert("Product added Successfully");
        }
        setProductName("");
        setProductDes("");
      })

      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <br />
      <h1
        className="head"
        style={{ fontFamily: "Axiforma", cursor: "pointer" }}
        onClick={() => navigate("/ManufactureLand")}
      >
        Asset Warranty
      </h1>
      <div className="Add-list" style={{ fontFamily: "Helvetica Now" }}>
        {/* <form class="form-horizontal"> */}
        <br />
        <h2 className="p1" style={{ fontFamily: "Axiforma" }}>
          Add Product
        </h2>
        <br />
        <form className="proform">
          <label className="label-text" htmlfor="text">
            Product Name
          </label>
          <input
            className="p2"
            id="product_id"
            name="product_id"
            placeholder="Name"
            type="text"
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
          />

          {/* <div className="add2"> */}
          <label className="label-text" htmlfor="text">
            Product Description
          </label>
          <textarea
            className="p2"
            id="product_name"
            name="product_name"
            placeholder="Description"
            type="textarea"
            onChange={(e) => setProductDes(e.target.value)}
            value={productDes}
          />
          {/* </div> */}
          <br />
          <button className="btD" type="submit" onClick={addproduct}>
            Add product
          </button>
          <br />
        </form>
        {/* </form> */}
        <div className="head2" style={{ fontFamily: "Axiforma" }}>
          Copyright &copy; 2023 | Asset Warranty
        </div>
        {/* <div className="headlogin" style={{ fontFamily: "Axiforma" }}>
          Copyright &copy; 2023 | Asset Warranty
        </div> */}
      </div>
    </div>
  );
}

export default AddProduct;
