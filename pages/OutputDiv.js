import React, { Component, PropTypes } from 'react';
import { Col, Row, Icon, Tabs, Button, Radio} from 'antd';

const mobile =(
    <div className="mobile-output">
      <h3 className="mobile-title">Mobile Output</h3>
      <div className="command">
        <p>This is place code</p>
      </div>
    </div>
)

const web =(
    <div className="web-output">
      <h3 className="web-title">Web Output</h3>
      <div className="command">
        <p>This is place code</p>
      </div>
    </div>
)

export default class OutputDiv extends Component {
  state = {
    value: true,
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const { mode } = this.state;
    return(
      <div>
        <Col md={24}>
          <Col md={12} className="">
            <h1 className="outputTitle">Output</h1>
          </Col>
          <Col md={12} className="optionButton" >
            <Radio.Group onChange={this.onChange} value={mode} style={{ marginBottom: 8 }}>
              <Radio.Button value="true">Web</Radio.Button>
              <Radio.Button value="false">Mobile</Radio.Button>
            </Radio.Group>
          </Col>
        </Col>
        <Col md={24}>
          <h3 className="Json-title">JSON / Firebase obj</h3>
          <div className="command">
            <p>npm instal xxxxxxxxxxx-xxxx</p>
            <p>npm run dev</p>
          </div>
          {this.state.value == "true" ? web : mobile}
        </Col>
      </div>
    )
  }
}
