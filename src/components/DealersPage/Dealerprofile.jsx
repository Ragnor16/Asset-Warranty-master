import React from "react";
import "./Dealerprofile.css";

const Dealerprofile = () => {
  return (
    <div className="bcbody">
      <div className="dea">
        
        <div className="dea1">
          <h3
            className="dstyle"
            style={{
              fontFamily: "serif",
              marginLeft: "40px",
              marginTop: "52px",
              wordSpacing: "6px",
            }}
          >
            DEALER PROFILE
          </h3>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>

        <img
          class="dea2"
          src="https://www.linkpicture.com/q/profile_picture-transformed-removebg-preview.png"
          alt=""
        />
      </div>
      <br/>
      <br />
      <br />
      <div className="dea5">
        <br />
        <div className="dea3">
          <br />
          <li>
            <strong className="de">Name:</strong>
            <h7 className="de1" style={{ marginLeft: "27px" }}>
              Ramasamy
            </h7>
          </li>
          <br />

          <li>
            <strong className="de">Position:</strong>
            <h7 className="de1" style={{ paddingLeft: "12px" }}>
              Dealer
            </h7>
          </li>
          <br />

          <li>
            <strong className="de">Company:</strong>
            <h7 className="de1" style={{ paddingLeft: "10px" }}>
              Butterfly
            </h7>
          </li>

          <br />
        </div>
        <br />
        <br />

        <div className="dea4">
          <li>
            <strong className="de">Location:</strong>
            <h7 className="de1" style={{ paddingLeft: "10px" }}>
              Malaysia
            </h7>
          </li>
          <br />
          <li>
            <strong className="de">Email:</strong>
            <h7 className="de1" style={{ paddingLeft: "10px" }}>
              Ramasamy@gmail.com
            </h7>
          </li>
          <br />

          <li>
            <strong className="de">Mobile Number:</strong>
            <h7 className="de1" style={{ paddingLeft: "10px" }}>
              9998887776
            </h7>
          </li>

          <br />
        </div>
        <button className="but1">
          <span>Logout</span>
          <svg
            viewBox="-5 -5 110 110"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0" />
          </svg>
        </button>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
    // </div>
  );
};

export default Dealerprofile;
