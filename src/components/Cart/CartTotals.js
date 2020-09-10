import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-9 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger mb-3 px-5 text-uppercase"
                type="button"
                onClick={() => clearCart()}
              >
                清空购物车
              </button>
            </Link>
            <h5>
              <span>小计:</span>
              <strong>￥{cartSubTotal}</strong>
            </h5>
            <h5>
              <span>折扣:</span>
              <strong>￥{cartTax}</strong>
            </h5>
            <h5>
              <span>总计:</span>
              <strong>￥{cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
