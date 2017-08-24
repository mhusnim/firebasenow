import React, { Component, PropTypes } from 'react';
import { Layout, Col, Row, Button, Icon, Input} from 'antd';

export default class Pricing extends Component {
  render() {
    return(
      <div>
        <Row>
          <Col md={24} className="priceBox">
            <h1 className="priceTitle">Pricing</h1>
            <div className="block-text-center">
              <div className="pricing-section-item pricing-section-free">
                <div className="pricing-section-top">
                  <h1>Free</h1>
                  <p className="pricing-section-item-description" style={{margin: '1.75em 1em 1em'}}>
                     A simple and powerful way to get things done.
                  </p>
                  <span className="pricing-section-price-free">$ 0</span>
                  <p className="pricing-section-quiet">Free, forever.</p>
                  <a href="#" className="global-header-section-button-primary"><strong>Learn More</strong></a>
                </div>
                <div className="pricing-section-bottom">
                  <ul className="pricing-section-list">
                    <li>Unlimited boards, lists, cards, members, checklists, attachments, etc.</li>
                    <li>One Power-Up per Board</li>
                    <li>Basic integrations with Box, Drive, and Dropbox</li>
                    <li>File attachments up to 10MB</li>
                  </ul>
                </div>
              </div>

              <div className="pricing-section-item pricing-section-bc">
                <div className="pricing-section-top">
                  <h2>Business</h2>
                  <p className="pricing-section-item-description" style={{margin: '1.75em 1em 1em'}}>
                     App integrations, team overviews, and more security.
                  </p>
                  <span className="pricing-section-price">$ 9.99</span>
                  <p className="pricing-section-quiet">per user/month (when paid annually)</p>
                  <a href="#" className="global-header-section-button-primary"><strong>Upgrade Team</strong></a>
                </div>
                <div className="pricing-section-bottom">
                  <ul className="pricing-section-list">
                    <li><span>Everything you love about the free version of Dokumi</span></li>
                    <li><span> Unlimited Power-Ups including integrations with Evernote, Github, Google Hangouts, Mailchimp, Salesforce, Slack, Google Drive, Dropbox, and more </span></li>
                    <li><span>File attachments up to 250MB</span></li>
                    <li><span>Group and organize all of your team's boards with Collections</span></li>
                    <li><span>Maintain control with immediate, one click access removal for former members</span></li>
                    <li><span>Stay secure by controlling who can create public or private boards</span></li>
                    <li><span>Keep company information private with restricted membership invitations</span></li>
                    <li><span>Add personality with custom board backgrounds and stickers</span></li>
                    <li><span>Priority email support with a human being and a guaranteed 1 day response time during business hours</span></li>
                  </ul>
                </div>
              </div>

              <div className="pricing-section-item pricing-section-enterprise">
                <div className="pricing-section-top">
                  <h2>Enterprise</h2>
                  <p className="pricing-section-item-description" style={{margin: '1.75em 1em 1em'}}>
                     For large companies managing multiple teams across Dokumi.
                  </p>
                  <p className="pricing-section-quiet-enterprise">Learn more about Dokumi Enterprise. Schedule a custom demo for your team today.</p>
                  <a href="#" className="global-header-section-button-primary"><strong>Contact Us</strong></a>
                </div>
                <div className="pricing-section-bottom">
                  <ul className="pricing-section-list">
                    <li><span>All of the robust features of Dokumi Business Class</span></li>
                    <li><span>Onboarding with Single Sign On (SAML 2.0 service) means seamless access for your entire team</span></li>
                    <li><span>Enable 2-Factor Authentication to keep all work data secure</span></li>
                    <li><span>Stay connected with a dedicated Account Executive to streamline training and enhance productivity</span></li>
                    <li><span>Receive personalized onboarding assistance to aid in adoption, migration, and execution of all materials</span></li>
                    <li><span>Get answers quickly with priority email and phone support with responses in less than 1 business day, guaranteed</span></li>
                    <li><span>Be informed with comprehensive legal contract review and enhanced SLA</span></li>
                    <li><span>File encryption at rest</span></li>
                    <li><span>Intrusion detection with enhanced software monitoring</span></li>
                    <li><span>Custom security review for record of usage documentation</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
