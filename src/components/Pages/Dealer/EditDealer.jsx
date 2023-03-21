import React, { useState } from "react";
import axios from "../../Repeated/axios.js";
import "../../Repeated/font.css";
import "./EditDealer.css";
// import { Modal, ModalBody } from "react-bootstrap";

function EditDealer({ dealer, onClose }) {
  const [name, setDealerName] = useState(dealer.name);
  const [branch, setDealerBranch] = useState(dealer.branch);
  const [status, setStatus] = useState(dealer.status);

  const handleSave = async () => {
    try {
      await axios.put(`/dealers/${dealer._id}`, {
        name,
        branch,
        status,
      });
      onClose();
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <br />
      <div>
        <h2 className="title2" style={{ fontFamily: "Axiforma" }}>
          Edit Dealer
        </h2>
        <form className="editform">
          <label className="labelname" htmlfor="text">
            Dealer Name
          </label>
          <input
            className="inputfield"
            id="dealer_id"
            name="dealer_id"
            placeholder=" Dealer Name"
            type="text"
            value={name}
            onChange={(e) => setDealerName(e.target.value)}
          />
          <br />
          <label className="labelname" htmlfor="text">
            Dealer Branch
          </label>
          <input
            className="inputfield"
            id="dealer_id"
            name="dealer_id"
            placeholder="Branch Name"
            type="text"
            value={branch}
            onChange={(e) => setDealerBranch(e.target.value)}
          />
          <br />
          <div className="wrapper">
            <input
              type="radio"
              name="status"
              id="active"
              value="true"
              checked={status === true}
              onChange={() => setStatus(true)}
            />
            <label className="option" htmlFor="active">
              <div className="dot"></div>
              <span>Active</span>
            </label>
            <input
              type="radio"
              name="status"
              id="inactive"
              value="false"
              checked={status === false}
              onChange={() => setStatus(false)}
            />
            <label className="option" htmlFor="inactive">
              <div className="dot"></div>
              <span>Inactive</span>
            </label>
          </div>
          <button
            id="deal-save"
            name="deal-save"
            className="deal-save"
            onClick={handleSave}
          >
            Save
          </button>
          <br />
          <button
            id="deal-close"
            name="deal-close"
            className="deal-close"
            onClick={onClose}
          >
            Close
          </button>
          <br />
        </form>
      </div>
    </div>
  );
}

export default EditDealer;
