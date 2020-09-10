import React, { Component } from "react";

export default class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="display-3">404</h1>
            <h1>页面出错了</h1>
            <h2>没有找到您想要的页面</h2>
            <h2>
              请求网址
              <span className="text-danger">
                {this.props.location.pathname}
              </span>
              {""}
              没有找到
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
