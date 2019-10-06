import React, { Component } from "react";

class Details extends Component {
  render() {
    const { event } = this.props;
    return (
      <div className="container" style={{ display: "block", width: "80vw" }}>
        {event.description}
        <br />
        <br />
        For detailed description, refer the <a href={event.pdf}>document</a>
        <br />
        <br />
        For any queries, feel free to contact :
        <br />
        <ul>
          {event.admins.map((admin, id) => (
            <li key={id.toString()}>{admin}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Details;
