import React, { useState } from "react";
import "./AddCust.css";
import "../Repeated/font.css";
import axios from "../Repeated/axios";

function AddCust() {
  const [firstName, setfName] = useState("");
  const [lastName, setlName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [saleDate, setSaleDate] = useState("");
  const [phone, setPhone] = useState("");

  const customerAdd = (e) => {
    e.preventDefault();
    axios
      .post("/AddCust", {
        firstName,
        lastName,
        address1,
        address2,
        state,
        zip,
        city,
        email,
        saleDate,
        phone,
      })
      .then((res) => {
        if (res.data.message === "success") {
          alert("Customer Added Successfully");
        }
        setfName("");
        setlName("");
        setAddress1("");
        setAddress2("");
        setState("");
        setZip("");
        setCity("");
        setEmail("");
        setSaleDate("");
        setPhone("");
      })
      .catch((error) => alert(error.message));
  };
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
      <div className="contbox">
        <div className="testbox">
          <form className="customerform" action="POST">
            <div className="banner">
              <h1 className="titleheader" style={{ fontfamily: "Axiforma" }}>
                Customer Details
              </h1>
            </div>
            <div className="colums">
              <div className="item">
                <label htmlFor="fname" className="labelcust">
                  First Name<span>*</span>
                </label>
                <input
                  id="fname"
                  type="text"
                  name="fname"
                  className="inputcust"
                  required=""
                  onChange={(e) => {
                    setfName(e.target.value);
                  }}
                  value={firstName}
                />
              </div>
              <div className="item">
                <label htmlFor="lname" className="labelcust">
                  Last Name<span>*</span>
                </label>
                <input
                  id="lname"
                  type="text"
                  name="lname"
                  className="inputcust"
                  required=""
                  onChange={(e) => {
                    setlName(e.target.value);
                  }}
                  value={lastName}
                />
              </div>
              <div className="item">
                <label htmlFor="address1" className="labelcust">
                  Address 1<span>*</span>
                </label>
                <input
                  id="address1"
                  type="text"
                  name="address1"
                  className="inputcust"
                  required=""
                  onChange={(e) => {
                    setAddress1(e.target.value);
                  }}
                  value={address1}
                />
              </div>
              <div className="item">
                <label htmlFor="address2" className="labelcust">
                  Address 2<span>*</span>
                </label>
                <input
                  id="address2"
                  type="text"
                  name="address2"
                  className="inputcust"
                  required=""
                  onChange={(e) => {
                    setAddress2(e.target.value);
                  }}
                  value={address2}
                />
              </div>
              <div className="item">
                <label htmlFor="state" className="labelcust">
                  State<span>*</span>
                </label>
                <input
                  id="state"
                  type="text"
                  name="state"
                  className="inputcust"
                  required=""
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                  value={state}
                />
              </div>
              <div className="item">
                <label htmlFor="zip" className="labelcust">
                  Zip/Postal Code<span>*</span>
                </label>
                <input
                  id="zip"
                  type="text"
                  name="zip"
                  className="inputcust"
                  required=""
                  onChange={(e) => {
                    setZip(e.target.value);
                  }}
                  value={zip}
                />
              </div>
              <div className="item">
                <label htmlFor="city" className="labelcust">
                  City<span>*</span>
                </label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  className="inputcust"
                  required=""
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  value={city}
                />
              </div>
              <div className="item">
                <label htmlFor="eaddress" className="labelcust">
                  Email Address<span>*</span>
                </label>
                <input
                  id="eaddress"
                  type="text"
                  name="eaddress"
                  className="inputcust"
                  required=""
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
              </div>
              <div className="item">
                <label htmlFor="date" className="labelcust">
                  Sale date<span>*</span>
                </label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  className="inputcust"
                  required=""
                  onChange={(e) => {
                    setSaleDate(e.target.value);
                  }}
                  value={saleDate}
                />
              </div>
              <div className="item">
                <label htmlFor="phone" className="labelcust">
                  Phone<span>*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  className="inputcust"
                  required=""
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  value={phone}
                />
              </div>
            </div>
            <div>
              <button
                className="btC"
                type="submit"
                style={{
                  display: "flex",
                  justifyItems: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={customerAdd}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <br />
    </div>
  );
}

export default AddCust;
