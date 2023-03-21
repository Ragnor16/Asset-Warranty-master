import React,{useState} from "react";
import "./Topbar.css";
import "../Repeated/font.css";
import { useNavigate } from "react-router-dom";
import { ethers } from 'ethers';

import 'react-toastify/dist/ReactToastify.css';

const { getWeb3Modal, createWeb3Provider, connectWallet, EthereumContext, createContractInstance, log } = require('react-solidity-xdc3');

var connectOptions = {  
  rpcObj: {
    50: "https://erpc.xinfin.network",
    51: "https://erpc.apothem.network"
  },
  network: "mainnet",
  toDisableInjectedProvider: true
}

function Topbar() {
  const [connecting, setconnecting] = useState(false);
  const [ethereumContext, setethereumContext] = useState({});
  const web3Modal = getWeb3Modal(connectOptions);

  const connect = async (event) => {
    event.preventDefault();
    const instance = await web3Modal.connect();
    const { provider, signer } = await createWeb3Provider(instance);
    const account = signer.getAddress();
    setethereumContext({ provider, account})
    log("Connect", "Get Address", await signer.getAddress());
    setconnecting(true);
  }

  const navigate = useNavigate();
  const handleClick = () => {
    const navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
  };

  return (
    <header>
      <div
        className="logo"
        style={{ fontFamily: "Axiforma", cursor: "pointer" }}
        onClick={() => navigate("/ManufactureLand")}
      >
        Asset Warranty
      </div>
      <div className="profile" onClick={handleClick}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className="nav-bar">
        <ul>
          <li>
            <a
              style={{
                fontFamily: "Axiforma",
                cursor: "pointer",
                textDecoration: "none",
              }}
              className="active"
              onClick={() => navigate("/ManufactureLand/Product")}
            >
              Product
            </a>
          </li>

          <li>
            <a
              style={{
                fontFamily: "Axiforma",
                cursor: "pointer",
                textDecoration: "none",
              }}
              className="active"
              onClick={() => navigate("/ManufactureLand/ModalPage")}
            >
              Model
            </a>
          </li>
          <li>
            <a
              style={{
                fontFamily: "Axiforma",
                cursor: "pointer",
                textDecoration: "none",
              }}
              className="active"
              onClick={() => navigate("/ManufactureLand/dealers")}
            >
              Dealer
            </a>
          </li>
          <li>
            <a
              style={{
                fontFamily: "Axiforma",
                cursor: "pointer",
                textDecoration: "none",
              }}
              className="active"
              onClick={() => navigate("/ManufactureLand/Stock")}
            >
              Stock
            </a>
          </li>
          
          <li>
          <form onSubmit={connect}>
          <button type="submit" disabled={connecting}>{connecting ? 'Connecting...' : 'Connect'}</button>
        </form>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Topbar;
