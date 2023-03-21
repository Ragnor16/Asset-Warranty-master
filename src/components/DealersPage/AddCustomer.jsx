import React from "react";
import { useNavigate } from "react-router-dom";

function AddCustomer() {
  const navigate = useNavigate();
  return (
    <div>
      <br />
      <h1
        className="head"
        style={{ fontFamily: "Axiforma", cursor: "pointer" }}
        onClick={() => navigate("/Dealer")}
      >
        Asset Warranty
      </h1>
      <div>
        {/* <br /> */}
        <div>
          <div className="boxcont1">
            <br />
            <h2 className="title" style={{ fontFamily: "Axiforma" }}>
              Add a Customer
            </h2>

            <form className="login-form" action="POST">
              <label className="Email-btn">Customer Name</label>
              <input type="text" placeholder=" Dealer Name" />
              <label className="Email-btn">Customer Mobile</label>
              <input type="text" placeholder="Mobile Number" />
              <label className="Email-btn">Customer Email</label>
              <input type="email" placeholder="Email Address" />
              <label className="Email-btn" htmlfor="text">
                Customer Address
              </label>
              <textarea className="p2" placeholder="Address" />
              <label className="Email-btn">Sale Date</label>
              <input type="date" />

              <br />
              <button className="btD" type="submit">
                Add Customer
              </button>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCustomer;
