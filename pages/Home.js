import React, { Component, PropTypes } from 'react';
import { Layout, Col, Row, Button, Icon, Input} from 'antd';
const { TextArea } = 'Input';

export default class Home extends Component {
  render() {
    return(
      <div>
        <Row>
          <Col md={2}>
            <img src="../static/images/logo.png" className="Content-Logo"/>
          </Col>
          <Col md={22} className="title">
            <h1>Out of The Box Table GUI for Your Firebase Data</h1>
            {/*=========== gif image format bottom tittle ===========*/}
            {/*<div className="demo-crud">
              <img src="../static/images/gif.png" className="content-crud"/>
            </div>*/}
            <Row>
              <Col md={11} className="instant">
                <h3><Icon type="tool" /> Easy Data Management</h3>
                <p className="instant-content">
                  Firebase is a good Backend as a Service, but it {"doesn't"} have Graphical User Interface for
                  managing {"it's"} data. FirebaseTable come to solve those problem by developing an Easy and Intuitive GUI for firebase.
                </p>
              </Col>
              <Col md={11} className="instant">
                <h3><Icon type="bar-chart" /> Increase Productivity</h3>
                <p className="instant-content">
                  FirebaseTable make your work easier and faster. Creating text input, text area, table relationship, uploading image and more.
                  All of those can be easily done with FirebaseTable.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={11} className="instant">
                <h3><Icon type="retweet" /> Integration</h3>
                <p className="instant-content" align="jutify">
                  FirebaseTable output is just a bunch of Firebase Objects that can be used on your Web App and Mobile App easily.
                  Just like fetching data from Firebase, but with easier data management on backend.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md={22} push={2}>
            <h1>Getting Started</h1>
            <div className="started-group">
              <ol className="started-group-list">
                <li><p>Register into Firebasenow <a href="http://facebook.com" className="register">click here</a></p></li>
                <li>
                  <p>Set your Firebase API Token</p>
                  <p><img src="../static/images/token.png" className="token-image"/></p>
                </li>
                <li>
                  <p>Create your first Table</p>
                  <p><img src="../static/images/create-table.png" className="create-table-gif"/></p>
                </li>
                <li>
                  <p>Add some column as you need</p>
                  <p><img src="../static/images/create-table.png" className="create-table-gif"/></p>
                </li>
                <li>
                  <p>Fetch your data using Firebase SDK or API</p>
                  <Col md={24}>
                    <Col md={7} className="javascript-group">
                      <h3><Icon type="appstore-o" /> Javascript</h3>
                      <div className="javascript-list-content">
                        <ul>
                          <li>
                            <p>Installation</p>
                            <div className="command">
                              <p>npm instal xxxxxxxxxxx-xxxx</p>
                              <p>npm run dev</p>
                            </div>
                          </li>
                          <li>
                            <p>Fetch data</p>
                            <div className="command">
                              <p>This is place code</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col md={8} className="RN-group">
                      <h3><Icon type="appstore-o" /> React Native</h3>
                      <div className="RN-list-content">
                        <ul>
                          <li>
                            <p>Installation</p>
                            <div className="command">
                              <p>npm instal xxxxxxxxxxx-xxxx</p>
                              <p>npm run dev</p>
                            </div>
                          </li>
                          <li>
                            <p>Fetch data</p>
                            <div className="command">
                              <p>This is place code</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col md={7} className="mobile-group">
                      <h3><Icon type="appstore-o" /> IOS & Android</h3>
                      <div className="mobile-list-content">
                        <ul>
                          <li>
                            <p>Installation</p>
                            <div className="command">
                              <p>npm instal xxxxxxxxxxx-xxxx</p>
                              <p>npm run dev</p>
                            </div>
                          </li>
                          <li>
                            <p>Fetch data</p>
                            <div className="command">
                              <p>This is place code</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Col>
                  <div className="button-More">
                    <Button type="primary" icon="eye-o" size="large">View More on Docs</Button>
                  </div>
                </li>
              </ol>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={22} push={2}>
            <h1>Output</h1>
            <Col md={24} xs={24}>
              <Col md={8} xs={8}>
                <div className="left-box">
                  {/*<p className="left-arrow" style={{marginTop: 20}}>&#11174;</p>*/}
                  <img src="../static/images/leftward.svg" style={{marginTop: 70}} className="leftward"/>
                </div>
              </Col>
              <Col md={8} xs={8}>
                <h3 className="Json-title">JSON / Firebase obj</h3>
                <div className="command">
                  <p>npm instal xxxxxxxxxxx-xxxx</p>
                  <p>npm run dev</p>
                </div>
              </Col>
              <Col md={8} xs={8}>
                <div className="right-box">
                  {/*<p className="right-arrow" style={{marginTop: 20}}>&#8628;</p>*/}
                  <img src="../static/images/rightward.svg" style={{marginTop: 70}} className="rightward"/>
                </div>
              </Col>
            </Col>
            <Col md={24}>
              <Col md={12} xs={12}>
                <div className="web-output">
                  <h3 className="web-title">Web</h3>
                  <div className="command">
                    <p>This is place code</p>
                  </div>
                </div>
              </Col>
              <Col md={12} xs={12}>
                <div className="mobile-output">
                  <h3 className="mobile-title">Mobile</h3>
                  <div className="command">
                    <p>This is place code</p>
                  </div>
                </div>
              </Col>
            </Col>
          </Col>
        </Row>
      </div>
    )
  }
}
