import React, { Component } from "react";
import rule_book from "./RuleBook";
class Rules extends Component {
  render() {
    const { event } = this.props;
    return (
      <div className="container" style={{ display: "block", width: "80vw" }}>
        <br />
        <ul>
          {event.rules
            ? event.rules.split(";").map(str => <li>{"  " + str}</li>)
            : rule_book({ link: event.pdf })}
        </ul>
      </div>
    );
  }
}

export default Rules;
