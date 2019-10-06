import React, { Component } from "react";
import { Link } from "react-router-dom";

class DepatmentEvent extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { events } = this.props;
    return (
      <div className="container">
        <br />
        {events.map((event, id) => {
          return (
            <div className="cards">
              <div className="card-item">
                <Link
                  to={`events/${event.name}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="card-image">
                    <img
                      src={`${event.img}`}
                      alt="Loading..."
                      className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                      width="500"
                      height="500"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    />
                  </div>
                  <div className="card-info">
                    <h2 className="card-title">{event.name}</h2>
                    <p className="card-intro">{event.prizes}</p>
                    <p className="card-intro club-text">{event.dept}</p>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default DepatmentEvent;
