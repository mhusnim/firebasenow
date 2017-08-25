import React, { Component, PropTypes } from 'react';
import { Col, Row, Icon, Button, Radio} from 'antd';
import markdown from 'markdown-in-js'

const Installation =(
    <div className="schema-output">
      <div className="command">
        <p>$ npm install firebase --save</p>
      </div>
    </div>
)

const code =(
    <div className="client-output">
      <div className="command">
        markdown`
        # Title
        ## Subtitle
        ### Subsubtitle
        Paragram with also
        - One
        - nice
        - list
        [and a link](http://www.pointing.to/nowhere)
        *Thank you*
        `
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
          <Radio.Button value="true"><strong>Installation</strong></Radio.Button>
          <Radio.Button value="false"><strong>Code</strong></Radio.Button>
        </Radio.Group>

        {this.state.value == "true" ? Installation : code}
      </div>
    )
  }
}
