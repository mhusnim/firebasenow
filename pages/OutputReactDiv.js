import React, { Component, PropTypes } from 'react';
import { Col, Row, Icon} from 'antd';

export default class OutputReactDiv extends Component {
  render() {
    return(
      <div>
        <Col md={24}>
          <Col md={8} className="">
            <h1 className="outputTitle">Output</h1>
          </Col>
          <Col md={16} className="optionButton" >
            <a href="#" className="linkToOthers"><strong>React Native docs</strong> <Icon type="right" /></a>
            <a href="#" className="linkToOthers"><strong>View on Github</strong> <Icon type="right" /></a>
          </Col>
        </Col>

        <Col md={24}>
          <div className="root">
            <ul>
              <li>GraphQL Rocks by Sashko Stubailo <span>(3 votes)</span></li>
              <li>Introduction to GraphQL by Tom Coleman <span>(2 votes)</span></li>
              <li>Advanced GraphQL by Sashko Stubailo <span>(1 votes)</span></li>
            </ul>
          </div>
        </Col>
      </div>
    )
  }
}
