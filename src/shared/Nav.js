import React, { Component } from "react";
import { Row, Col } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Row className="nav">
        <Col span={2} />
        <Col span={8}>
          <div className="logotype">
            30<span className="logobold">x</span>40
          </div>
        </Col>
        <Col span={2} />
      </Row>
    );
  }
}
