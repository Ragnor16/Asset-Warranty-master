import React ,{useState}from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Pages/LandingPages/Landing";
import LoginPage from "./components/Pages/LoginPage/Login";
import ManufactureLand from "./components/Pages/LandingPages/ManufactureLand";
import Product from "./components/Pages/Product/Product";
import AddProduct from "./components/Pages/Product/Addproduct";
import DealersPage from "./components/Pages/Dealer/DealersPage";
import AddDealer from "./components/Pages/Dealer/AddDealer";
import Stock from "./components/Pages/Stock/Stock";
import CreateModal from "./components/Pages/Modal/CreateModal";
import Modalpage from "./components/Pages/Modal/ModalPage";
import CustomerView from "./components/CustomerPage/CustomerView";
import StockDetails from "./components/DealersPage/StockDetails";
import AddCustomer from "./components/DealersPage/AddCustomer";
import AddCust from "./components/DealersPage/AddCust";
import Dealerprofile from "./components/DealersPage/Dealerprofile";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ethers } from 'ethers';

const { getWeb3Modal, createWeb3Provider, connectWallet, EthereumContext, createContractInstance, log } = require('react-solidity-xdc3');


const App = () => {
  const [ethereumContext, setethereumContext] = useState({});

  return (
    <div>
            <section className="App-content">
            <EthereumContext.Provider value={ethereumContext}>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/ManufactureLand" element={<ManufactureLand />} />
        <Route path="/ManufactureLand/Product" element={<Product />} />
        <Route
          path="/ManufactureLand/Product/Addproduct"
          element={<AddProduct />}
        />
        <Route path="/ManufactureLand/Stock" element={<Stock />} />
        <Route path="/ManufactureLand/dealers" element={<DealersPage />} />
        <Route
          path="/ManufactureLand/dealers/AddDealer"
          element={<AddDealer />}
        />
        <Route path="/ManufactureLand/ModalPage" element={<Modalpage />} />
        <Route
          path="/ManufactureLand/ModalPage/AddModal"
          element={<CreateModal />}
        />
        <Route path="/View" element={<CustomerView />} />
        <Route path="/Dealer" element={<StockDetails />} />{" "}
        <Route path="/Dealer/AddCustomer" element={<AddCustomer />} />
        <Route path="/Dealer/AddCust" element={<AddCust />} />
        <Route path="/pro" element={<Dealerprofile />} />
      </Routes>
      </EthereumContext.Provider>

      </section>
      <ToastContainer hideProgressBar={true} />

    </div>
  );
};

export default App;
