import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import "../EventDetail/Styles.css";
// import Loading from "../Loading";
import DepartmentEvent from "./DepartmentEvent";
import ClubEvent from "./ClubEvent";
import Mobileview from "./Mobileview";
import HomeHeader from "../HomeHeader";
import { NavLink } from "react-router-dom";

const styles = theme => ({
  root: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
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
  eventsCard: {
    marginLeft: "40vh",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      display: "none"
    }
  }
});

class EventDetail extends Component {
  constructor(props) {
    super(props);
    const { events } = props;
    this.departmentShow = this.departmentShow.bind(this);
    this.clubShow = this.clubShow.bind(this);
    this.state = {
      active: 0,
      departmental: events.filter(event => event.is_club === 0),
      clubEvents: events.filter(event => event.is_club === 1),
      isMenuOpen: false
    };
  }

  clubShow = active => {
    this.setState({
      active: 1
    });
  };
  departmentShow = active => {
    this.setState({
      active: 0
    });
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { classes, events } = this.props;
    const { departmental, clubEvents } = this.state;
    return (
      <div style={{position: this.state.isMenuOpen ? "fixed" : "unset"}}>
        <div className={classes.root}>
          <HomeHeader onToggleMenu={(isMenuOpen) => {
            this.setState({
              isMenuOpen
            })
          }}/>
          <div className={classes.verticalTab}>
            <div>
              <NavLink to="home" exact strict>
                <img
                  src="/images/logo.png"
                  className="img-fluid"
                  alt={"Loading"}
                />
              </NavLink>
            </div>
            <div className="btnFlex">
              <button
                className={
                  "btn btn-event btn-2 " +
                  (this.state.active === 0 ? "active-bottom" : "")
                }
                onClick={this.departmentShow}
              >
                DEPARTMENT
              </button>
              <button
                className={
                  "btn btn-event btn-2 " +
                  (this.state.active === 1 ? "active-bottom" : "")
                }
                onClick={this.clubShow}
              >
                CLUB
              </button>
            </div>
          </div>
          <br />
          <div className={classes.eventsCard}>
            {this.state.active === 0 && (
              <DepartmentEvent events={departmental} />
            )}
            {this.state.active === 1 && <ClubEvent events={clubEvents} />}
          </div>
          {window.innerWidth < 960 ? <Mobileview events={events} /> : ""}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(EventDetail);
