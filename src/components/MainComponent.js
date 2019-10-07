import React, { Component } from "react";
// import HomeHeader from "./HomeHeader";
import Home from "./Home";
import EventPage from "./EventPage";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";
// import { connect } from "react-redux";
// import { fetchEvents, getEvent } from "../redux/Actions/Events";
// import { loginUser, logoutUser, registerUser } from "../redux/Actions/Auth";
// import { fetchUsers, editUser, editPassword } from "../redux/Actions/Users";
import EventDetail from "./EventDetail";
import OurTeam from "./OurTeam";
import ComingSoon from "./ComingSoon";
import { Events } from "../shared/Events";
import Workshops from "./Workshops";
import AboutTheme from "./AboutTheme";

// const mapStateToProps = state => {
//   return {
//     events: state.events,
//     auth: state.auth,
//     users: state.users
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   fetchEvents: () => {
//     dispatch(fetchEvents());
//   },
//   getEvent: name => dispatch(getEvent(name)),
//   fetchUsers: () => {
//     dispatch(fetchUsers());
//   },
//   loginUser: creds => dispatch(loginUser(creds)),
//   logoutUser: () => dispatch(logoutUser()),
//   registerUser: creds => dispatch(registerUser(creds)),
//   editUser: (email, name, phone, college) =>
//     dispatch(editUser(email, name, phone, college)),
//   editPassword: (email, password) => dispatch(editPassword(email, password))
// });

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: false,
      preloader: true,
      delayed: false,
      events: Events
    };
    this.makeShowLogo = this.makeShowLogo.bind(this);
    this.hideLogo = this.hideLogo.bind(this);
  }

  makeShowLogo() {
    const { header } = this.state;
    if (!header) this.setState({ header: true });
  }

  hideLogo() {
    const { header } = this.state;
    if (header) this.setState({ header: false });
  }

  componentDidMount() {
    // this.props.fetchEvents();
    // if (
    //   this.props.auth.isAuthenticated &&
    //   this.props.auth.userinfo &&
    //   this.props.auth.userinfo.admin
    // ) {
    //   this.props.fetchUsers();
    // }
    window.addEventListener("scroll", this.handleScroll);
    //this.setState({ preloader: false });
    // setTimeout(() => {
    //   this.setState({ delayed: true });
    // }, 4000);
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  render() {
    const { events } = this.state;
    const EventWithName = ({ match }) => {
      let selectedEvent = events.filter(
        event => event.name === match.params.eventName
      )[0];
      // let notFoundErr = null;
      if (selectedEvent === undefined) {
        return <ComingSoon />;
      }
      return <EventDetail event={selectedEvent} />;
    };
    const { preloader } = this.props;
    const { delayed } = this.state;
    // if (preloader && !delayed) {
    //   return <div>Loading .........</div>;
    // }
    // const PrivateRouteCommon = ({ component: Component, ...rest }) => (
    //   <Route
    //     {...rest}
    //     render={props =>
    //       this.props.auth.isAuthenticated ? (
    //         <Component {...props} />
    //       ) : (
    //         <Redirect
    //           to={{
    //             pathname: "/home",
    //             state: { from: props.location }
    //           }}
    //         />
    //       )
    //     }
    //   />
    // );

    // const PrivateRouteAdmin = ({ component: Component, ...rest }) => (
    //   <Route
    //     {...rest}
    //     render={props =>
    //       this.props.auth.isAuthenticated && this.props.auth.userinfo.admin ? (
    //         <Component {...props} />
    //       ) : (
    //         <Redirect
    //           to={{
    //             pathname: "/home",
    //             state: { from: props.location }
    //           }}
    //         />
    //       )
    //     }
    //   />
    // );

    // const PrivateRouteStudent = ({ component: Component, ...rest }) => (
    //   <Route
    //     {...rest}
    //     render={props =>
    //       this.props.auth.isAuthenticated && !this.props.auth.userinfo.admin ? (
    //         <Component {...props} />
    //       ) : (
    //         <Redirect
    //           to={{
    //             pathname: "/home",
    //             state: { from: props.location }
    //           }}
    //         />
    //       )
    //     }
    //   />
    // );

    // const PublicRoute = ({ component: Component, ...rest }) => (
    //   <Route
    //     {...rest}
    //     render={props =>
    //       !this.props.auth.isAuthenticated ? (
    //         <Component {...props} />
    //       ) : (
    //         <Redirect
    //           to={{
    //             pathname: "/home",
    //             state: { from: props.location }
    //           }}
    //         />
    //       )
    //     }
    //   />
    // );

    return (
      <div className="App">
        {/* <HomeHeader
          showLogo={this.state.header}
          auth={this.props.auth}
          loginUser={this.props.loginUser}
          logoutUser={this.props.logoutUser}
          registerUser={this.props.registerUser}
        /> */}
        <Switch location={this.props.location}>
          <Route
            exact
            path="/home"
            component={() => (
              <Home makeShowLogo={this.makeShowLogo} hideLogo={this.hideLogo} />
            )}
          />

          {/* <Route
            exact
            path="/events/eventDetail"
            component={() => (
              <EventDetail events={this.props.events} auth={this.props.auth} />
            )}
          /> */}
          {/* <Route exact path="/login" component={() => <Login />} /> */}
          <Route exact path="/our-team" component={() => <OurTeam />} />
          <Route exact path="/coming-soon" component={() => <ComingSoon />} />
          <Route exact path="/workshops" component={() => <Workshops />} />
          <Route exact path="/about-theme" component={() => <AboutTheme />} />
          <Route
            exact
            path="/events"
            component={() => (
              <EventPage events={events} auth={this.props.auth} />
            )}
          />
          <Route path="/events/:eventName" component={EventWithName} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
