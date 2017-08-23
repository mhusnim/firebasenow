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
            <h1>Backendless Firebase Customizeable AdminPage</h1>
            {/*=========== gif image format bottom tittle ===========*/}
            {/*<div className="demo-crud">
              <img src="../static/images/gif.png" className="content-crud"/>
            </div>*/}
            <Row>
              <Col md={11} className="instant">
                <h3><Icon type="tool" /> Instant Admin Page Generator</h3>
                <p className="instant-content">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters, as opposed to using 'Content here, content here',
                  making it look like readable English. Many desktop publishing packages and
                  web page editors now use Lorem Ipsum as their default model text, and a search
                  for 'lorem ipsum' will uncover many web sites still in their infancy.
                  Various versions have evolved over the years, sometimes by accident,
                  sometimes on purpose (injected humour and the like).
                </p>
              </Col>
              <Col md={11} className="instant">
                <h3><Icon type="bar-chart" /> Increase Productivity</h3>
                <p className="instant-content">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={11} className="instant">
                <h3><Icon type="retweet" /> Easy & Intuitive</h3>
                <p className="instant-content" align="jutify">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters, as opposed to using 'Content here, content here',
                  making it look like readable English. Many desktop publishing packages and
                  web page editors now use Lorem Ipsum as their default model text, and a search
                  for 'lorem ipsum' will uncover many web sites still in their infancy.
                  Various versions have evolved over the years, sometimes by accident,
                  sometimes on purpose (injected humour and the like).
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
