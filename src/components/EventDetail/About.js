import React, { Component } from "react";

class About extends Component {
  render() {
    const { event } = this.props;
    return (
      <div className="container" style={{ display: "block", width: "80vw" }}>
        {" "}
        {` About:- ${(!event.about ? event.description : "") +
          "\n " +
          event.about} \n `}
        <br />
        <br />
        <br />
        {`${
          event.is_club
            ? " CLUB  :  " + event.club
            : "  DEPARTMENT  :  " + event.dept
        }`}
      </div>
    );
  }
}

export default About;
