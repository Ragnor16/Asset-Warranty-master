import React, { useEffect, useState } from "react";
import axios from "../../Repeated/axios";
import "../../Repeated/font2.css";
import { useNavigate } from "react-router-dom";
import Topbar from "../../Repeated/Topbar";
import "./ModalPage.css";
import { Modal, ModalBody } from "react-bootstrap";
import EditModal from "./EditModal";

function Modalpage() {
  const navigate = useNavigate();
  const [models, setModels] = useState([]);
  const [showEditMod, setShowEditMod] = useState(false);
  const [selectedModal, setSelectedModal] = useState({});

  const handleEdit = (model) => {
    setSelectedModal({
      ...model,
      status: model.status ? "Active" : "Inactive",
    });
    setShowEditMod(true);
  };
  // useEffect(() => {
  //   const fetchdata = async () => {
  //     const data = await axios.get("/ModalPage");
  //     setModels(data);
  //   };
  //   fetchdata();
  // }, []);

  useEffect(() => {
    axios
      .get("/ModalPage")
      .then((response) => {
        setModels(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Topbar />
      <br />
      <h1 style={{ fontfamily: "Axiforma" }} className="titleh">
        List of Modals
      </h1>
      <br />
      <div>
        <button
          className="add-mod"
          style={{ display: "flex", margin: "auto" }}
          onClick={() => navigate("/ManufactureLand/ModalPage/AddModal")}
        >
          Add Model
        </button>
      </div>
      <br />
      <div>
        <div class="table-container">
          <table class="table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Model Name</th>
                <th>Status</th>
                <th>Warranty</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {models.map((model) => (
                <tr key={model._id}>
                  <td>{model.product?.productName}</td>
                  <td>{model.modelName}</td>
                  <td>{model.status ? "Active" : "Inactive"}</td>
                  <td>
                    <button
                      className="view-mod"
                      onClick={() => navigate("/View")}
                    >
                      View
                    </button>
                  </td>
                  <td>
                    <button
                      className="Edit-mod"
                      onClick={() => handleEdit(model)}
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
        Copyright &copy; 2023 | Asset Warrenty
      </div>
      {/* <div className="headlogin" style={{ fontFamily: "Axiforma" }}>
        Copyright &copy; 2023 | Asset Warranty
      </div> */}

      <Modal show={showEditMod} onHide={() => setShowEditMod(false)}>
        <ModalBody>
          <EditModal
            model={selectedModal}
            onClose={() => setShowEditMod(false)}
          />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Modalpage;
