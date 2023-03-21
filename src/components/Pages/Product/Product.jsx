import React, { useEffect, useState } from "react";
import axios from "../../Repeated/axios";
import Editprod from "./Editprod";
import "../../Repeated/font2.css";
import "../../Repeated/font.css";
import { useNavigate } from "react-router-dom";
import "./Product.css";
import { Modal, ModalBody } from "react-bootstrap";
import Topbar from "../../Repeated/Topbar";

function Product() {
  const navigate = useNavigate();
  const [showEditProd, setShowEditProd] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [products, setProducts] = useState("");

  const handleEdit = (product) => {
    setSelectedProduct({
      ...product,
      status: product.status ? "Active" : "Inactive",
    });
    setShowEditProd(true);
  };

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("/editproduct");
      setProducts(data);
    };
    fetchdata();
  }, []);

  return (
    <div>
      <Topbar />
      <br />
      <h1 style={{ fontfamily: "Axiforma" }} className="titleh">
        List of Products
      </h1>
      <br />
      <div>
        {/* <div className="leftalign">
          <button
            className="bbn"
            onClick={() => navigate("/ManufactureLand/Product/Addproduct")}
          >
            Add Product
          </button>
        </div>  */}
        <div>
          <button
            className="add-dealer"
            style={{ display: "flex", margin: "auto" }}
            onClick={() => navigate("/ManufactureLand/Product/Addproduct")}
          >
            Add Product
          </button>
        </div>
        <br />
        <div class="table-container">
          <table class="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Status</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.data.map((product) => (
                  <tr key={product._id}>
                    <td>{product.productName}</td>
                    <td>{product.status ? "Active" : "Inactive"}</td>
                    <td>
                      <button
                        className="Edit-btn"
                        onClick={() => handleEdit(product)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="head2" style={{ fontFamily: "Axiforma" }}>
        Copyright &copy; 2023 | Asset Warranty
      </div>
      {/* <div className="headlogin" style={{ fontFamily: "Axiforma" }}>
        Copyright &copy; 2023 | Asset Warranty
      </div> */}

      <Modal show={showEditProd} onHide={() => setShowEditProd(false)}>
        <ModalBody>
          <Editprod
            product={selectedProduct}
            onClose={() => setShowEditProd(false)}
          />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Product;
