import React, { Component, PropTypes } from 'react';
import { Layout, Col, Row, Button, Icon, Input, Form, Radio, Tabs} from 'antd';
const { TextArea } = 'Input';
const FormItem = Form.Item;

import InputReactDiv from './InputReactDiv';
import OutputReactDiv from './OutputReactDiv';
import InputRNDiv from './InputRNDiv';
import OutputRNDiv from './OutputRNDiv';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

const react =(
  <div>

  </div>
)

const reactNative =(
  <div>

  </div>
)

export default class Home extends Component {
  render() {
    return(
      <div>
        <Row className="intro">
          <Col md={24}>
            <Col md={2}>
              <img src="../static/images/logo.png" className="Content-Logo"/>
            </Col>
            <Col md={22} className="title">
              <h1>Out of The Box Table GUI for Your Firebase Data</h1>
            </Col>
          </Col>
          <Col md={24} className="introComponent">
              <Col md={8} className="instant">
                <div className="introImageComponent">
                  <img src="../static/images/easy-management.png"/>
                </div>
                <h3><Icon type="tool" /> Easy Data Management</h3>
                <p className="instant-content">
                  Firebase is a good Backend as a Service, but it {"doesn't"} have Graphical User Interface for
                  managing {"it's"} data. FirebaseTable come to solve those problem by developing an Easy and Intuitive GUI for firebase.
                </p>
              </Col>
              <Col md={8} className="instant">
                <div className="introImageComponent">
                  <img src="../static/images/increase-productivity.png"/>
                </div>
                <h3><Icon type="bar-chart" /> Increase Productivity</h3>
                <p className="instant-content">
                  FirebaseTable make your work easier and faster. Creating text input, text area, table relationship, uploading image and more.
                  All of those can be easily done with FirebaseTable.
                </p>
              </Col>
              <Col md={8} className="instant">
                <div className="introImageComponent">
                  <img src="../static/images/integration.png"/>
                </div>
                <h3><Icon type="retweet" /> Integration</h3>
                <p className="instant-content" align="jutify">
                  FirebaseTable output is just a bunch of Firebase Objects that can be used on your Web App and Mobile App easily.
                  Just like fetching data from Firebase, but with easier data management on backend.
                </p>
              </Col>
          </Col>
        </Row>

        <Row>
          <div className="mailGroup">
            <div className="mailBox">
              <h3 className="headBox">Increase Your Productivity with FirebaseTable</h3>
              <Form layout="inline">
                 <FormItem>
                     <Input placeholder="Your Email" className="emailForm" type="email"/>
                 </FormItem>
                 <FormItem>
                   <Button type="primary" className="mailButton" >Sign up for free</Button>
                 </FormItem>
               </Form>
               <p>
                  FirebaseTable is free to use. We also offer paid plans with additional features, and support.
               </p>
            </div>
          </div>
        </Row>

        <Row className="started">
          <div className="star">
            <h1 classname="fancy">Getting Started</h1>
            <div className="started-group">
              <ol className="started-group-list">
                <Col md={12} sm={12} xs={24} className="StratedLeftSide">
                  <li><p>Create Your Firebase Account if You {"don't"} have one. <a href="https://firebase.google.com/" target="_blank" className="register">click here</a></p></li>
                  <li><p>Sign Up into FirebaseTable. <a href="#" className="register">Sign Up</a></p></li>
                  <li>
                    <p>Set your Firebase API Info on FirebaseTable Settings Page</p>
                    <p><img src="../static/images/token.png" className="token-image"/></p>
                  </li>
                  <li>
                    <p>Create your first Table</p>
                    <p><img src="../static/images/gif-twitter.gif" className="create-table-gif"/></p>
                  </li>
                </Col>
                <Col md={12} sm={12} xs={24} className="StratedRightSide">
                  <li>
                    <p>Add some column as you need</p>
                    <p><img src="../static/images/gif-twitter.gif" className="create-table-gif"/></p>
                  </li>
                  <li>
                    <p>Fetch your data using Firebase SDK or API</p>
                  </li>
                </Col>
              </ol>
            </div>
          </div>
        </Row>

        <Row className="started">
          <Col md={24} className="queries">
            <div>
              <h1 classname="fancy">Queries</h1>
              <h4 className="SubFancy">
                Apollo makes fetching the exact data you need for your component
                easy and allows you to put your queries exactly where you need them.
              </h4>
            </div>
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="React" key="1">
                <Col md={12} className="input">
                  <InputReactDiv />
                </Col>
                <Col md={12} className="output">
                  <div className="triangle"></div>
                  <OutputReactDiv />
                </Col>
              </TabPane>
              <TabPane tab="React Native" key="2">
                <Col md={12} className="input">
                  <InputRNDiv />
                </Col>
                <Col md={12} className="output">
                  <div className="triangle"></div>
                  <OutputRNDiv />
                </Col>
              </TabPane>
            </Tabs>

            <div className="button-More">
              <Button onClick={()=> window.open('https://firebase.google.com/docs/', '_blank')} type="primary" icon="eye-o" size="large">Learn More about Firebase</Button>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
