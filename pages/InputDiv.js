import React, { Component, PropTypes } from 'react';
import { Col, Row, Icon, Tabs} from 'antd';
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

export default class InputDiv extends Component {
  render() {
    return(
      <div>
        <Tabs onChange={callback} type="card" className="TabInput">
          <TabPane tab="Javascript" key="1">
            <div className="javascript-list-content">
                <div className="InstallationBlock">
                  <p>Installation</p>
                  <div className="command">
                    <p>npm instal xxxxxxxxxxx-xxxx</p>
                    <p>npm run dev</p>
                  </div>
                </div>
                <div className="InstallationBlock">
                  <p>Fetch data</p>
                  <div className="command">
                    <p>This is place code</p>
                  </div>
                </div>
            </div>
          </TabPane>

          <TabPane tab="React Native" key="2">
            <div className="RN-list-content">
              <div className="InstallationBlock">
                  <p>Installation</p>
                  <div className="command">
                    <p>npm instal xxxxxxxxxxx-xxxx</p>
                    <p>npm run dev</p>
                  </div>
                </div>
                <div className="InstallationBlock">
                  <p>Fetch data</p>
                  <div className="command">
                    <p>This is place code</p>
                  </div>
                </div>
            </div>
          </TabPane>

          <TabPane tab="IOS & Android" key="3">
            <div className="mobile-list-content">
              <div className="InstallationBlock">
                  <p>Installation</p>
                  <div className="command">
                    <p>npm instal xxxxxxxxxxx-xxxx</p>
                    <p>npm run dev</p>
                  </div>
                </div>
                <div className="InstallationBlock">
                  <p>Fetch data</p>
                  <div className="command">
                    <p>This is place code</p>
                  </div>
                </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
