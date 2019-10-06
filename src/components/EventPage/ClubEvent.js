import React, { Component } from "react";
import "./Styles.css";
import { Link } from "react-router-dom";

class ClubEvent extends Component {
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
              <div className="card-item" id={event.name}>
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
                    <p style={{ color: "green", marginBottom: "10px" }}>
                      {event.prizes}
                    </p>
                    <p style={{ color: "blue" }}>{event.club}</p>
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
export default ClubEvent;
