import React, { useContext } from "react";
import "./PlaceHolder.css";
import { StoreContext } from "../../context/StoreContext";
const PlaceHolder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className="place-order" action="">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="ZIP Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>CART TOTALS:</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>₹ {getTotalCartAmount()}/-</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>₹ {getTotalCartAmount()===0?0:80}/-</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total</p>
            <p>₹ {getTotalCartAmount()===0?0:getTotalCartAmount()+80}/-</p>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceHolder;
