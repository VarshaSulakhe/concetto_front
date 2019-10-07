import React, { Component } from "react";
import Header from "./Header";

class ComingSoon extends Component {
  componentDidMount() {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0); //to fix bug of component not showing
  }
  componentWillUnmount() {
    document.body.style.overflowY = "scroll";
  }
  render() {
    return (
      <div>
        <Header />
        <h1
          className="title"
          style={{
            textAlign: "center",
            left: "40%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          COMING SOON......
        </h1>
      </div>
    );
  }
}

export default ComingSoon;
