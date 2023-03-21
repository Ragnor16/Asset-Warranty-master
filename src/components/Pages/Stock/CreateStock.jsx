
import React from 'react'
import Form from 'react-bootstrap/Form';
import "./CreateStock.css"
import TextField from "@mui/material/TextField";
import { Modal, ModalBody } from 'react-bootstrap';

function CreateStock({show,onHide}) {
  return (
    <Modal show={show} onHide={onHide}>
        <ModalBody>
        
    <div className='AddStock'>
        <br/><h1 style={{ display: "flex", justifyContent: "center", fontFamily: "Dennis Sans", color: 'blue' }}>
        Add a Stock
      </h1>

        <form className="login-form" action="POST">
        <div className='d0d1'>
        <Form.Select aria-label="Default select example">
            <option>select Product</option>
            <option value="1">Tv</option>
            <option value="2">Watch</option>
            <option value="3">Phone</option>
            </Form.Select>
  </div>
  <br />


  <div className='d0d1'>
    <Form.Select aria-label="Default select example">
    <option>select Modal</option>
    <option value="1">Realmi</option>
    <option value="2">Redmi</option>
    <option value="3">Samsung</option>
  </Form.Select>
  </div>
  <br />
  

  <div  className='d0d1'>
    <Form.Select aria-label="Default select example">
    <option> select Dealer</option>
    <option value="1">Kishore</option>
    <option value="2">Hari Kishore</option>
    <option value="3">Diwakar</option>
  </Form.Select>
  </div>
  <br />

  
<div className='d0d1'>
<TextField
          required
          id="outlined-required"
          label="Serial Number"
          className="serial"
          />
    </div>
    <br/>

    <div className="btndiv">
      <button style={{ backgroundColor: 'BLUE',  }} className="btn1">Add a Stock</button>
      </div>


              
</form>
<br />
<br />

<br/>
</div>
</ModalBody>
</Modal>
  )
}

export default CreateStock;
