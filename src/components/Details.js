import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/*title */}
              <div className="row">
                <div
                  className="col-10 mx-auto text-center
                 text-slanted text-primary my-5"
                >
                  <h1>{title}</h1>
                </div>
              </div>
              {/*end title */}
              {/*product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/*product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>型号: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    生产商：<span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-primary">
                    <strong>
                      售价:<span>￥</span>
                      {Math.round(price * 6.85)}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    产品详情：
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/*buttons*/}
                  <div>
                    <Link to="/">
                      <ButtonContainer>全部商品</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                      }}
                    >
                      {inCart ? "已在购物车" : "加入购物车"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
