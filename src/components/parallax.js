import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { Link } from "react-router-dom";

const styles = theme => ({
  container: {
    margin: "100px",
    [theme.breakpoints.down("sm")]: {
      position: "relative"
      // right: "10px"
    }
  },
  images: {
    right: "-90px",
    height: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s linear",
    padding: 0,
    position: "relative"
  },
  image1: {
    height: "60%",
    minWidth: "250px !important",
    position: "absolute",
    left: "-40px",
    opacity: 0.8,
    zIndex: 150,
    bottom: 25,
    margin: 0,
    padding: 0
  },
  image1M: {},
  image2: {
    position: "relative",
    padding: 0,
    bottom: 40,
    minHeight: "100% !important",
    minWidth: "75% !important"
  },
  image2M: {},
  image3: {
    height: "70% !important",
    minWidth: "300px !important",
    position: "absolute",
    right: "-70px",
    opacity: 0.8,
    zIndex: 150,
    margin: 0,
    padding: 0,
    bottom: 0
  },
  image3M: {},
  text: {
    minWidth: "400px",
    marginLeft: "130px",
    marginTop: "50px",
    position: "relative",
    textAlign: "center",
    padding: 0,
    zIndex: 160
  }
});
class Parallax extends React.Component {
  constructor(props) {
    super(props);
    this.parent = React.createRef();
    this.parentOffsetTop = 0;
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.parentOffsetTop = this.parent.current.getBoundingClientRect().top;
  }
  render() {
    const { content, classes, x } = this.props;
    return (
      <div className={classNames(classes.container, "container")}>
        <div className="row">
          <div
            ref={this.parent}
            className={
              window.innerWidth > 800
                ? classNames(classes.images, "col-6")
                : "col-12"
            }
          >
            <img
              style={
                window.innerWidth > 800
                  ? {
                      transform: `translateY(${-(-this.parentOffsetTop + x) /
                        8}px)`
                    }
                  : null
              }
              src={content.image1}
              alt="Loading..."
              className={
                window.innerWidth > 800
                  ? classNames(
                      classes.image1,
                      "col-offset-2 col-8 col-md-2",
                      "image1"
                    )
                  : classNames(classes.image1M, "col-4")
              }
            />
            <img
              style={
                window.innerWidth > 800
                  ? {
                      transform: `translateY(${(-this.parentOffsetTop + x) /
                        16}px)`
                    }
                  : null
              }
              src={content.image2}
              alt="Loading..."
              className={
                window.innerWidth > 600
                  ? classNames(
                      classes.image2,
                      "col-offset-2 col-8 col-md-3",
                      "image2"
                    )
                  : classNames(classes.image2M, "col-4")
              }
            />
            <img
              style={
                window.innerWidth > 800
                  ? {
                      transform: `translateY(${-(-this.parentOffsetTop + x) /
                        2}px)`
                    }
                  : null
              }
              src={content.image3}
              alt="Loading..."
              className={
                window.innerWidth > 800
                  ? classNames(
                      classes.image3,
                      "col-offset-2 col-8 col-md-2",
                      "image3"
                    )
                  : classNames(classes.image3M, "col-4")
              }
            />
          </div>
          <div
            className={
              window.innerWidth > 800
                ? classNames(classes.text, "col-12 col-md-3")
                : classNames("col-12 col-md-3")
            }
            style={{ textAlign: "center" }}
          >
            <Link to={content.link} className={" title"}>
              <h1 style={{ color: "lightblue" }}>{content.heading}</h1>
            </Link>
            {content.description}
          </div>
        </div>
      </div>
    );
  }
}

Parallax.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  x: PropTypes.number.isRequired
};
export default withStyles(styles)(Parallax);
