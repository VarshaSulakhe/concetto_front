import React, { Component } from "react";
import Header from "../Header";
import { Workshop_list } from "../../shared/Workshops";

class Workshops extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Header />
        <br />
        <h1
          style={{
            textAlign: "center",
            marginTop: "15px"
          }}
          className="title"
        >
          WORKSHOPS
        </h1>
        <div className="container">
          {Workshop_list.map((workshop, id) => (
            <React.Fragment key={id.toString()}>
              <hr class="featurette-divider" style={{ margin: "2rem" }} />
              <div class="row featurette">
                <div class={"col-md-5 " + (id % 2 === 0 ? "order-md-2" : "")}>
                  <img
                    src={workshop.img}
                    class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    width="500"
                    height="500"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    aria-label="Placeholder: 500x500"
                    alt="Loading..."
                  ></img>
                </div>
                <div class={"col-md-7 " + (id % 2 === 0 ? "order-md-1" : "")}>
                  <h2
                    class="featurette-heading"
                    align="center"
                    style={{ color: "lightblue" }}
                  >
                    {workshop.name}
                    {/* <br />
                    <span class="text-muted">Manthan</span> */}
                  </h2>
                  <p>{workshop.details}</p>
                  <p>
                    <a
                      href={workshop.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "lightblue" }}
                    >
                      Know more..
                    </a>
                  </p>
                  <a
                    href={workshop.reg_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="btn btn-primary"
                      style={{ marginLeft: "50%" }}
                    >
                      Register <i class="fa fa-arrow-circle-right"></i>
                    </button>
                  </a>
                </div>
              </div>
            </React.Fragment>
          ))}
          <br />
        </div>
      </div>
    );
  }
}

export default Workshops;
