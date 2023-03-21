import React from "react";
import "../Repeated/font.css";
import "./StockDetails.css";
import { useNavigate } from "react-router-dom";

function StockDetails() {
  const navigate = useNavigate();
  return (
    <div>
      <br />
      <h1
        className="head"
        style={{ fontFamily: "Axiforma", cursor: "pointer" }}
      >
        Asset Warranty
      </h1>
      <br />
      <h1 style={{ fontfamily: "Axiforma" }} className="titleh">
        Assigned Stocks
      </h1>
      <br />
      {/* <div>
        <button className="add-mod" style={{ display: "flex", margin: "auto" }}>
          Add Model
        </button>
      </div> */}
      <br />
      <div>
        <div class="table-container">
          <table class="table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Model Name</th>
                <th>Serial Number</th>
                <th>Status</th>
                <th>Warranty</th>
                <th>Customer Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Iphone</td>
                <td>14 Max</td>
                <td>1234</td>
                <td>Sold</td>
                <td>
                  <button className="view-mod">View</button>
                </td>
                <td>
                  <button
                    className="Edit-mod"
                    onClick={() => navigate("/Dealer/AddCustomer")}
                  >
                    Add Customer
                  </button>
                </td>
              </tr>
              <tr>
                <td>Iphone</td>
                <td>14 Max</td>
                <td>1234</td>
                <td>Unsold</td>
                <td>
                  <button className="view-mod">View</button>
                </td>
                <td>
                  <button
                    className="Edit-mod"
                    onClick={() => navigate("/Dealer/AddCust")}
                  >
                    Add Customer
                  </button>
                </td>
              </tr>
              <tr>
                <td>Iphone</td>
                <td>14 Max</td>
                <td>1234</td>
                <td>Unsold</td>
                <td>
                  <button className="view-mod">View</button>
                </td>
                <td>
                  <button
                    className="Edit-mod"
                    // onClick={() => navigate("/Dealer/AddCustomer")}
                  >
                    Add Customer
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="head2" style={{ fontFamily: "Axiforma" }}>
        Copyright &copy; 2023 | Asset Warrenty
      </div> */}
      <div className="headlogin" style={{ fontFamily: "Axiforma" }}>
        Copyright &copy; 2023 | Asset Warranty
      </div>
    </div>
  );
}

export default StockDetails;
