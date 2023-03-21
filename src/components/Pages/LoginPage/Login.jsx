import React, { useState } from "react";
import axios from "../../Repeated/axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import "../../Repeated/font.css";

// import Footerr from "../components/Repeated/Footerr";

const LoginPage = () => {
  const history = useNavigate();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:3000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/ManufactureLand", { state: { id: email } });
          } else if (res.data == "notexist") {
            alert("There is no such user");
          }
        })
        .catch((e) => {
          alert("wrong detail");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <br />
      <h1
        className="head"
        style={{ fontFamily: "Axiforma", cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        Asset Warranty
      </h1>
      <br />
      <br />
      <div>
        <br />
        <div className="can">
          <div className="img">
            <br />
            <div className="boxcont">
              <br />
              <h2 className="title">Welcome</h2>

              <form className="login-form" action="POST">
                <label className="Email-btn" htmlfor="email">
                  Email
                </label>
                <input
                  className="wn"
                  type="email"
                  placeholder="Your email"
                  id="email"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <br />
                <label className="Email-btn" htmlfor="password">
                  Password
                </label>
                <input
                  className="wn"
                  type="password"
                  placeholder="*********"
                  id="password"
                  name="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <br />
                <button className="bt" type="submit" onClick={submit}>
                  Log In
                </button>
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="copy" style={{ fontFamily: "Axiforma" }}>
        Copyright &copy; 2023 | Asset Warranty
      </div>
      {/* <div className="headlogin" style={{ fontFamily: "Axiforma" }}>
        Copyright &copy; 2023 | Asset Warranty
      </div> */}
    </div>
  );
};

export default LoginPage;
