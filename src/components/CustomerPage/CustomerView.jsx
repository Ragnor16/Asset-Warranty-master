import React from "react";
import "./CustomerView.css";
import { useNavigate } from "react-router-dom";

function CustomerView() {
  const navigate = useNavigate();
  return (
    <div className="me">
      <div>
        <br />
        <div className="mer1">
          <div
            className="mer2"
            style={{ fontFamily: "Axiforma", cursor: "pointer" }}
            onClick={() => navigate("/ManufactureLand")}
          >
            Asset Warranty
          </div>
        </div>
        <br />

        <div className="mer11">
          <div className="mer3">
            {/* <img
          className="mer4"
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt=""
        /> */}
            <br />
            <div className="me1">
              <div className="mer5">
                <li>
                  <strong>Invoiced to</strong>
                </li>
                <li>Kishore</li>
                <li>Roupark 37</li>
                <li>New York</li>
                <li>USA</li>
              </div>
              <br />
            </div>
          </div>

          <br />
          <br />

          <div className="mer6">
            <br />
            <li>
              <strong className="mer9">Serial No:</strong>
              <h7 className="mer7"> 768534923468</h7>
            </li>
            <li>
              <strong className="mer9">Invoice Date:</strong>
              <h7 className="mer7">20/01/2023</h7>
            </li>
            <li>
              <strong className="mer9">Warranty Start:</strong>
              <h7 className="mer7">21/01/2023</h7>
            </li>
            <li>
              <strong className="mer9">Warranty End:</strong>
              <h7 className="mer7">21/01/2040</h7>
            </li>
            <li>
              <strong className="mer9">Status:</strong>
              <h7 className="mer7">Sold</h7>
            </li>
            <br />
          </div>
          <div className="mer8">
            <br />
            <li>
              <strong className="mer10">Dealer</strong>
            </li>
            <li className="mer10">Diwakar</li>
            <li className="mer10">Samsung</li>
            <li className="mer10">California, United States.</li>
            <br />
          </div>
        </div>
        <br />
        <br />

        <br />
        <br />
        <div className="mer7">
          <table className="ttab1">
            <thead className="theadss">
              <tr className="trr">
                <th scope="col">Product</th>
                <th>Status</th>
                <th scope="col">Qty</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody className="tbodyyy">
              <tr>
                <td>
                  <strong class="book-title">Don&#8217;t Make Me Think</strong>
                  <span class="text-offset">by Steve Krug</span>
                </td>
                <td class="item-stock">In Stock</td>
                <td class="item-qty">1</td>
                <td class="item-price">$30.02</td>
              </tr>

              <tr>
                <td>
                  <strong class="book-title">
                    A Project Guide to UX Design
                  </strong>
                  <span class="text-offset">
                    by Russ Unger &#38; Carolyn Chandler
                  </span>
                </td>
                <td class="item-stock">In Stock</td>
                <td class="item-qty">2</td>
                <td class="item-price">
                  $52.94{" "}
                  <span class="text-offset item-multiple">$26.47 &#215; 2</span>
                </td>
              </tr>

              <tr>
                <td>
                  <strong class="book-title">Introducing HTML5</strong>
                  <span class="text-offset">
                    by Bruce Lawson &#38; Remy Sharp
                  </span>
                </td>
                <td class="item-stock">Out of Stock</td>
                <td class="item-qty">1</td>
                <td class="item-price">$22.23</td>
              </tr>

              <tr>
                <td>
                  <strong class="book-title">Bulletproof Web Design</strong>
                  <span class="text-offset">by Dan Cederholm</span>
                </td>
                <td class="item-stock">In Stock</td>
                <td class="item-qty">1</td>
                <td class="item-price">$30.17</td>
              </tr>
            </tbody>

            <tfoot>
              <tr class="text-offset">
                <td colspan="3">SubTotal</td>
                <td>135.36</td>
              </tr>
              <tr class="text-offset">
                <td colspan="3">Tax</td>
                <td>13.54</td>
              </tr>
              <tr class="text-offset">
                <td colspan="3">Total</td>
                <td>148.90</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="head2" style={{ fontFamily: "Axiforma" }}>
        Copyright &copy; 2023 | Asset Warranty
      </div>
      {/* <div className="headlogin" style={{ fontFamily: "Axiforma" }}>
            Copyright &copy; 2023 | Asset Warrenty
          </div> */}
    </div>
  );
}

export default CustomerView;
