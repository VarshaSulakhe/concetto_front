import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import "./Styles.css";
// import Loading from "../Loading";
import About from "./About";
import Rules from "./Rules";
import Details from "./Details";
import Register from "./Register";
import Mobileview from "./Mobileview";
import Header from "../Header/index";
import HomeHeader from "../HomeHeader/index";
import { NavLink } from "react-router-dom";

const styles = theme => ({
  verticalTab: {
    display: "flex",
    flexDirection: "column",
    width: "20vw !important",
    backgroundColor: "rgba(97, 97, 97, 0.1)",
    position: "fixed",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  desktopView: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  image: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "20vw",
    marginTop: "50px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      marginTop: "50px"
    }
  }
});

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.aboutShow = this.aboutShow.bind(this);
    this.rulesShow = this.rulesShow.bind(this);
    this.detailsShow = this.detailsShow.bind(this);
    this.registerShow = this.registerShow.bind(this);
  }
  state = {
    active: "about",
  };

  aboutShow = active => {
    this.setState({
      active: "about"
    });
  };
  rulesShow = active => {
    this.setState({
      active: "rules"
    });
  };
  detailsShow = active => {
    this.setState({
      active: "details"
    });
  };
  registerShow = active => {
    this.setState({
      active: "register"
    });
  };

  onToggle = isMenuOpen => {
    document.body.style.overflow= isMenuOpen ? "hidden" : "scroll"
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { classes } = this.props;
    const { event } = this.props;
    return (
      <div style={{ display: "flex"}}>
        <div className={classes.verticalTab}>
          <div>
            <NavLink to="../home">
              <img
                src={window.location.origin + "/images/logo.png"}
                className="img-fluid"
                alt={"Loading.."}
              />
            </NavLink>
          </div>
          <div className="btnFlex">
            <button
              className={
                "btn btn-event btn-2 " +
                (this.state.active === "about" ? "active-bottom" : "")
              }
              onClick={this.aboutShow}
            >
              ABOUT
            </button>
            <button
              className={
                "btn btn-event btn-2 " +
                (this.state.active === "rules" ? "active-bottom" : "")
              }
              onClick={this.rulesShow}
            >
              RULES
            </button>
            <button
              className={
                "btn btn-event btn-2 " +
                (this.state.active === "details" ? "active-bottom" : "")
              }
              onClick={this.detailsShow}
            >
              DETAILS
            </button>
            <button
              className={
                "btn btn-event btn-2 " +
                (this.state.active === "register" ? "active-bottom" : "")
              }
              onClick={this.registerShow}
            >
              REGISTER
            </button>
          </div>
        </div>
        {window.innerWidth < 960 ? <Header onToggleMenu={this.onToggle}/> : <HomeHeader onToggleMenu={this.onToggle}/>}
        <div className={classes.image}>
          <img src={event.img} alt={event.name} className="event-img" />
          <div
            style={{
              fontSize: "40px",
              fontWeight: 800,
              textTransform: "capitalize"
            }}
            className="title"
          >
            {event.name}
          </div>
          <div className={classes.desktopView}>
            {this.state.active === "about" && (
              <About event={this.props.event} />
            )}
            {this.state.active === "rules" && (
              <Rules event={this.props.event} />
            )}
            {this.state.active === "details" && (
              <Details event={this.props.event} />
            )}
            {this.state.active === "register" && (
              <Register event={this.props.event} />
            )}
          </div>
          <div>
            {window.innerWidth < 960 ? <Mobileview event={event} /> : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(EventDetail);
