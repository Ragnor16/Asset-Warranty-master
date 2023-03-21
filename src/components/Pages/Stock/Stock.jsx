import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import CreateStock from "./CreateStock";
// import Search from "../../Repeated/Search";
import Topbar from "../../Repeated/Topbar";
import "./Stock.css";

function Stock() {
  const [show, onHide] = useState(false);

  const handleOpenModal = () => {
    onHide(true);
  };
  const handleCloseModal = () => {
    onHide(false);
  };
  return (
    <div>
      <Topbar />
      <br />
      <h1 style={{ fontfamily: "Axiforma" }} className="titleh">
        List of Stocks
      </h1>
      <br />
      <div className="asd">
        {/* <div className="popbtn">
           <button
            className="btn2"
            style={{ backgroundColor: "BLUE", margin: "0px 0px 0px 100px " }}
            onClick={handleOpenModal}
          >
            {" "}
            Add stock
          </button> */}
        <div>
          <button
            className="add-dealer"
            style={{ display: "flex", margin: "auto" }}
            onClick={handleOpenModal}
          >
            Add Stock
          </button>
        </div>
        <CreateStock show={show} onHide={handleCloseModal} />
      </div>

      {/* <br /> */}
      <br />
      <div class="tab-co">
        <table class="tabl">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Model Name</th>
              <th>Serial No</th>
              <th> Sale Status</th>
            </tr>
          </thead>
          <tbody>
            {/* {Stock &&
                Stock.data.map((Stock) => (
                  <tr key={Stock._id}>
                    <td>{Stock.demail}</td>
                    <td>{Stock.name}</td>
                    <td>{Stock.branch}</td>
                    <td>{Stock.status ? "Active" : "Inactive"}</td>
                    </tr>
                ))} */}
          </tbody>
        </table>
      </div>
      <div className="head2" style={{ fontFamily: "Axiforma" }}>
        Copyright &copy; 2023 | Asset Warrenty
      </div>
    </div>
  );
}

export default Stock;
