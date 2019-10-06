import React, { Component } from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Register extends Component {
  render() {
    const { event } = this.props;
    return (
      <div
        className=" container text-center"
        style={{ display: "block", width: "80vw" }}
      >
        <a href={event.link} target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn btn-primary btn-lg">
            REGISTER
          </button>
        </a>
      </div>
    );
  }
}

export default Register;
