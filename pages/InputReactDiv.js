import React, { Component, PropTypes } from 'react';
import { Col, Row, Icon, Button, Radio} from 'antd';

const schema =(
    <div className="schema-output">
      <div className="command">
        <p>This is place code</p>
      </div>
    </div>
)

const client =(
    <div className="client-output">
      <div className="command">
        <p>This is place code</p>
      </div>
    </div>
)

export default class InputReactDiv extends Component {
  state = {
    value: "true",
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
        <Radio.Group className="ButtonInput" onChange={this.onChange} value={mode} defaultValue="true" style={{ marginBottom: 8 }}>
          <Radio.Button value="true"><strong>Client</strong></Radio.Button>
          <Radio.Button value="false"><strong>Schema</strong></Radio.Button>
        </Radio.Group>

        {this.state.value == "true" ? client : schema}
      </div>
    )
  }
}
