import React, { Component } from "react";
import { Alert } from "reactstrap";
import Loading from "../Loading";
import PropTypes from "prop-types";
import "./styles.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      error_message: ""
    };
    this.formRef = React.createRef();
    this.passRef = React.createRef();
    this.repeatRef = React.createRef();
    this.bounceLeft = this.bounceLeft.bind(this);
    this.bounceRight = this.bounceRight.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
  }

  bounceLeft() {
    this.formRef.current.classList.remove("bounceRight");
    this.formRef.current.classList.add("bounceLeft");
  }

  bounceRight() {
    this.formRef.current.classList.remove("bounceLeft");
    this.formRef.current.classList.add("bounceRight");
  }

  handleRegisterSubmit() {
    if (this.passRef.current.value !== this.repeatRef.current.value) {
      this.setState({
        isError: true,
        error_message: "Both passwords should match"
      });
    } else if (this.passRef.current.value.length < 8) {
      this.setState({
        isError: true,
        error_message: "Password should have min. 8 characters"
      });
    } else {
      this.setState({
        isError: false,
        error_message: " "
      });
    }
  }

  render() {
    const { isError, error_message } = this.state;
    return (
      <div>
        <section class="user">
          <div class="user_options-container">
            <div class="user_options-text">
              <div class="user_options-unregistered">
                <h2 class="user_unregistered-title">Don't have an account?</h2>
                <p class="user_unregistered-text">
                  Enter your details and start your journey with us
                </p>
                <button
                  class="user_unregistered-signup"
                  id="signup-button"
                  onClick={this.bounceLeft}
                >
                  Sign up
                </button>
              </div>

              <div class="user_options-registered">
                <h2 class="user_registered-title">Have an account?</h2>
                <p class="user_registered-text">
                  {" "}
                  Login to participate in the events of Concetto
                </p>
                <button
                  class="user_registered-login"
                  id="login-button"
                  onClick={this.bounceRight}
                >
                  Login
                </button>
              </div>
            </div>

            <div
              class="user_options-forms"
              id="user_options-forms"
              ref={this.formRef}
            >
              <div class="user_forms-login">
                <h2 class="forms_title">Login</h2>
                <form class="forms_form">
                  <fieldset class="forms_fieldset">
                    <div class="forms_field">
                      <input
                        type="email"
                        placeholder="Email"
                        class="forms_field-input"
                        required
                        autofocus
                      />
                    </div>
                    <div class="forms_field">
                      <input
                        type="password"
                        placeholder="Password"
                        class="forms_field-input"
                        required
                      />
                    </div>
                  </fieldset>
                  <div class="forms_buttons">
                    <button type="button" class="forms_buttons-forgot">
                      Forgot password?
                    </button>
                    <input
                      type="submit"
                      value="Log In"
                      class="forms_buttons-action"
                    />
                  </div>
                </form>
              </div>
              <div class="user_forms-signup">
                <h2 class="forms_title">Sign Up</h2>
                <form class="forms_form" onSubmit={this.handleRegisterSubmit}>
                  <fieldset class="forms_fieldset">
                    <div class="forms_field">
                      <input
                        type="text"
                        placeholder="Full Name"
                        class="forms_field-input"
                        required
                      />
                    </div>
                    <div class="forms_field">
                      <input
                        type="email"
                        placeholder="Email"
                        class="forms_field-input"
                        required
                      />
                    </div>
                    <div class="forms_field">
                      <input
                        type="text"
                        placeholder="Whatsapp No. (10-digit)"
                        class="forms_field-input"
                        pattern="\d{10}$"
                        required
                      />
                    </div>
                    <div class="forms_field">
                      <input
                        type="text"
                        placeholder="College"
                        class="forms_field-input"
                        required
                      />
                    </div>
                    <div class="forms_field">
                      <input
                        type="password"
                        placeholder="Password (min. 8 characters)"
                        class="forms_field-input"
                        ref={this.passRef}
                        required
                      />
                    </div>
                    <div class="forms_field">
                      <input
                        type="password"
                        placeholder="Repeat Password"
                        class="forms_field-input"
                        ref={this.repeatRef}
                        required
                      />
                    </div>
                  </fieldset>
                  <div class="forms_buttons">
                    <div className="row">
                      <div className="col-6">
                        {isError ? (
                          <Alert color="danger">{error_message}</Alert>
                        ) : (
                          <div />
                        )}
                      </div>
                      <div className="col-4">
                        <input
                          type="submit"
                          value="Sign up"
                          class="forms_buttons-action"
                          style={{ marginRight: "80px" }}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Login;
