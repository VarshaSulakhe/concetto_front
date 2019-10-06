import React, { Component } from "react";
import Loading from "../Loading";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Footer from "../Footer";
import HomeHeader from "../HomeHeader";
import Parallax from "../parallax";
import Parallax2 from "../parallax2";
import { HomeContent } from "../../shared/Content";
import "./styles.css";
let max_offset, initial_offset;

const styles = theme => ({
  logo: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  logoImg: {
    transition: "all 3s ease",
    position: "fixed",
    transform: "translate(-50 %, -50 %)"
  },
  parallax: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  moon: {
    display: "flex",
    zIndex: 200,
    // height: "1800px",
    bottom: 0,
    position: "fixed"
  }
});
class Home extends Component {
  constructor(props) {
    super(props);
    if (window.innerWidth < 1400) {
      initial_offset = 52;
      max_offset = 62;
    } else if (window.innerWidth < 1700) {
      initial_offset = 42;
      max_offset = 52;
    } else {
      initial_offset = 35;
      max_offset = 44;
    }
    this.state = {
      offset: initial_offset,
      header: false,
      x: 0,
      isMenuOpen: false
    };
    this.homeRef = React.createRef();
  }
  componentDidMount() {
    this.props.hideLogo();
    window.scrollTo(0, 0);
    // this.setState({ x: window.scrollY });
    window.addEventListener("scroll", this.handleScroll);
    document.body.style.paddingBottom = "38vh";
  }
  componentWillUnmount() {
    // this.props.makeShowLogo();
    document.body.style.paddingBottom = "0";
    window.scrollTo(0, 0);
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    let scrollTop = window.pageYOffset;
    const { offset, header } = this.state;
    if (window.innerWidth > 800) this.setState({ x: window.scrollY });
    if (scrollTop > window.innerHeight / 10) {
      if (!header) {
        this.setState({
          header: true
        });
        if (this.homeRef.current) {
          this.homeRef.current.classList.toggle("logo-home");
          this.homeRef.current.classList.toggle("logo-header");
        }
      }
      if (offset !== max_offset) {
        this.setState({
          offset: max_offset
        });
      }
    } else {
      if (header) {
        this.setState({
          header: false
        });
        if (this.homeRef.current) {
          this.homeRef.current.classList.toggle("logo-header");
          this.homeRef.current.classList.toggle("logo-home");
        }
      }
      this.setState({
        offset: initial_offset + (scrollTop / window.innerHeight) * 100
      });
    }
  };

  // handleScroll1 = event => {
  //   this.setState({ x: window.scrollY });
  // };

  scrollDown() {
    window.scrollTo(0, window.innerHeight);
  }

  render() {
    const { classes } = this.props;
    const { offset, x } = this.state;
    return (
      <div style={{position: this.state.isMenuOpen ? "fixed" : "unset"}}>
        <section id="scroll_down" className="demo">
          <a
            onClick={() => {
              this.scrollDown();
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </section>
        <HomeHeader
          onToggleMenu={(isMenuOpen) => {
            this.setState({
              isMenuOpen
            })
          }}
        ></HomeHeader>
        <div className={classes.logo}>
          <img
            src="images/logo.png"
            className={`logo logo-home`}
            ref={this.homeRef}
            alt={Loading}
          />
        </div>
        {
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100vw"
            }}
          >
            <img
              src="https://concetto-front.s3.ap-south-1.amazonaws.com/moon_surface.png"
              className={classes.moon}
              alt="moon"
              style={{ transform: "translateY(" + offset + "vh)" }}
            />
          </div>
        }
        <div className={classes.parallax}>
          {HomeContent.map((content, id) => {
            if (id % 2 === 0)
              return <Parallax x={x} key={id.toString()} content={content} />;
            else
              return window.innerWidth > 800 ? (
                <Parallax2 x={x} key={id.toString()} content={content} />
              ) : (
                <Parallax x={x} id={id.toString()} content={content} />
              );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Home);
