import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">商品</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">品名</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">单价</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">数量</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">移除</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">总价</p>
        </div>
      </div>
    </div>
  );
}
