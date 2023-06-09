import React, { useState, useEffect } from "react";
import axios from "../../Repeated/axios";
import "../../Repeated/font2.css";
import "../../Repeated/font.css";
import "./CreateModal.css";
// import { Dropdown } from "react-bootstrap";
// import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const CreateModal = () => {
  const navigate = useNavigate();
  // const [selectedProduct, setSelectedProduct] = useState(null);

  // const handleSelectProduct = (product) => {
  //   setSelectedProduct(product);
  // };

  // const [products, setProducts] = useState("");

  // useEffect(() => {
  //   const fetchdata = async () => {
  //     const data = await axios.get("/add");
  //     setProducts(data);
  //   };
  //   fetchdata();
  // }, []);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productId, setProductId] = useState("");

  const [modelName, setModelName] = useState("");
  const [modelDes, setModelDescription] = useState("");

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setProductId(product.productName);
  };

  const handleModelNameChange = (e) => {
    setModelName(e.target.value);
  };

  const handleModelDescriptionChange = (e) => {
    setModelDescription(e.target.value);
  };

  // const handleAddModel = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.patch(
  //       `/AddModal/${selectedProduct.productName}`,
  //       {
  //         modelName: modelName,
  //         modelDes: modelDes,
  //       }
  //     );
  //     console.log(res.data);
  //     // Reset the form
  //     setSelectedProduct(null);
  //     setModelName("");
  //     setModelDescription("");
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };
  const handleAddModel = (e) => {
    e.preventDefault();
    axios
      .patch(`/AddModal/${selectedProduct.productName}`, {
        modelName: modelName,
        modelDes: modelDes,
      })
      .then((res) => {
        if (res.data.message === "success") {
          alert("Modal Added Successfully");
        }
        setSelectedProduct(null);
        setModelName("");
        setModelDescription("");
      })
      .catch((error) => alert(error.message));
  };

  const [products, setProducts] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("/AddModal");
      setProducts(data);
    };
    fetchdata();
  }, []);

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
      {/* <br /> */}
      <div className="Add-list">
        <br />
        <h2 className="heading" style={{ fontFamily: "Axiforma" }}>
          Add a Modal
        </h2>
        <br />
        <form className="modal-form" onSubmit={handleAddModel}>
          <label className="modlabel" htmlfor="text">
            Product Name
          </label>
          {/* <div className="drop">
            <Dropdown className="dp">
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="secondary"
              >
                {selectedProduct
                  ? selectedProduct.productName
                  : "Select product"}
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                {products &&
                  products.data.map((product) => (
                    <Dropdown.Item
                      active={selectedProduct === product}
                      onClick={() => handleSelectProduct(product)}
                    >
                      {product.productName}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
          </div> */}
          <>
            <select
              className="inputfield"
              value={selectedProduct?.id}
              onChange={(event) =>
                handleSelectProduct(
                  products.data.find(
                    (product) => product.id === Number(event.target.value)
                  )
                )
              }
            >
              <option value="">Select product</option>
              {products &&
                products.data.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.productName}
                  </option>
                ))}
            </select>
          </>
          <label className="modlabel" htmlfor="text">
            Modal Name
          </label>
          <input
            className="inputfield"
            id="model_id"
            name="model_id"
            placeholder="Name"
            type="text"
            value={modelName}
            onChange={handleModelNameChange}
          />

          <br />
          <label className="modlabel" htmlfor="text">
            Modal Description
          </label>
          <textarea
            className="inputfield"
            id="description_name"
            name="description_name"
            placeholder="Description"
            type="text"
            value={modelDes}
            onChange={handleModelDescriptionChange}
          />
          <br />
          <button
            id="singlebutton"
            name="singlebutton"
            className="btM"
            // onSubmit={handleAddModel}
          >
            Add Modal
          </button>
          <br />
        </form>
      </div>
      {/* <div className="head2" style={{ fontFamily: "Axiforma" }}>
        Copyright &copy; 2023 | Asset Warrenty
      </div> */}
      <br />
      <div className="headlogin" style={{ fontFamily: "Axiforma" }}>
        Copyright &copy; 2023 | Asset Warranty
      </div>
    </div>
  );
};

export default CreateModal;
