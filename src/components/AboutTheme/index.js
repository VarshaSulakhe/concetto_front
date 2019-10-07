import React, { Component } from "react";
import Header from "../Header";
import "./styles.css";

class AboutTheme extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="theme-page">
        <Header />
        <br />
        <h1
          style={{
            textAlign: "center",
            marginTop: "17px",
            color: "black"
          }}
          className="title"
        >
          About Theme
        </h1>
        <div className="container opaque">
          <br />
          "Astronomy compels the soul to look upward, and leads us from this
          world to another." Equipped with his five senses, man explores the
          universe around him and calls that adventurous Science as Astronomy.
          Astronomy is useful because it raises us above ourselves. It is useful
          because it is grand. It shows us how small is man's body, how great
          his mind, since his intelligence can embrace the whole of this
          dazzling immensity, where his body is only an obscure point, and enjoy
          its silent harmony. When we look at the moon, we do not see a hostile,
          empty world. We see the radiant body where man has taken his first
          steps into a frontier that will never end. Ten years ago the Moon was
          an inspiration to poets and an opportunity for lovers. Ten years from
          now it will be just another airport. In a world full of complexity and
          chaos, CONCETTO’19 endeavours to bring along all of you and rejuvenate
          you with extreme joviality and buoyancy. With the aim of providing a
          platform for the tech enthusiast students to develop and showcase
          their technical prowess, CONCETTO is the ideal destination for all
          technophiles. Boasting of a huge roaster of exhilarating and engaging
          events, along with promises to be grander, greater, more splendid and
          glorious than ever before IIT ISM presenting{" "}
          <b>CONCETTO: To The Moon And Back </b>.
        </div>
      </div>
    );
  }
}

export default AboutTheme;
