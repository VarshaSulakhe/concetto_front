import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import "../EventDetail/Styles.css";
import DepartmentEvent from "./DepartmentEvent";
import ClubEvent from "./ClubEvent";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import Header from "../Header";

const styles = theme => ({
  mobileTab: {
    border: "1px solid white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  tabRoot: {
    minWidth: "50%",
    textTransform: "initial",
    fontWeight: "bold",
    backgroundColor: "#999999",
    color: "white",
    "&:hover": {
      color: "#000",
      opacity: 1
    },
    "&$tabSelected": {
      color: "white",
      backgroundColor: "#666666",
      fontWeight: "bold"
    }
  },
  tabsRoot: {
    minWidth: "50%",
    borderBottom: "1px solid #e8e8e8"
  },
  tabsIndicator: {
    backgroundColor: "#1890ff"
  },
  tab: {
    width: "100%"
  },
  tabSelected: {}
});

class EventDetail extends Component {
  constructor(props) {
    super(props);
    const { events } = props;
    // this.departmentShow = this.departmentShow.bind(this);
    // this.clubShow = this.clubShow.bind(this);
    this.state = {
      active: 0,
      departmental: events.filter(event => event.is_club === 0),
      clubEvents: events.filter(event => event.is_club === 1)
    };
    // this.departmentShow = this.departmentShow.bind(this);
    // this.clubShow = this.clubShow.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // clubShow = () => {
  //   this.setState({
  //     active: 1
  //   });
  // };
  //           departmentShow = () => {
  //             this.setState({
  //               active: 0
  //             });
  //           };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  handleChange = (event, active) => {
    this.setState({ active: active });
  };

  render() {
    const { classes } = this.props;
    const { clubEvents, departmental } = this.state;
    return (
      <div className={classes.mobileTab}>
        <AppBar
          style={{
            backgroundColor: "rgba(1,1,1)",
            overflow: "hidden",
            zIndex: 10
          }}
          position="fixed"
        >
          <Tab>
            <Header />
          </Tab>
          <Tabs
            value={this.state.active}
            onChange={this.handleChange}
            indicatorColor="#666666"
            textColor="secondary"
            className={classes.tab}
          >
            <Tab
              label="Department"
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              // onClick={this.departmentShow}
            />
            <Tab
              label="Club"
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              // onClick={this.clubShow}
            />
          </Tabs>
        </AppBar>
        {this.state.active === 1 && <ClubEvent events={clubEvents} />}
        {this.state.active === 0 && <DepartmentEvent events={departmental} />}
        <br />
      </div>
    );
  }
}

export default withStyles(styles)(EventDetail);
