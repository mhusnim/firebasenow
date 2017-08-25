import React, { Component, PropTypes } from 'react';
import Head from 'next/head';
import { Layout, Col, Icon, Button} from 'antd';
const { Header } = Layout;

import Home from './Home';
import Pricing from './Pricing';


import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import { Link } from 'rc-scroll-anim';


export default class Index extends Component {
	static propTypes = { offset: PropTypes.number, };

  static defaultProps = { offset: 30, };

  constructor() {
    super();
    this.state = {
      affix: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const affix = this.state.affix;
    const offset = this.props.offset;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (!affix && scrollTop >= offset) {
      this.setState({
        affix: true,
      });
    }

    if (affix && scrollTop < offset) {
      this.setState({
        affix: false,
      });
    }
  };

	render () {
		const affix = this.state.affix ? 'affix' : '';
    const { className, ...props } = this.props;

		return (
			<Layout>
				<Head>
					<link rel="shortcut icon" type="image/png" href="../static/images/favicon.ico"/>
					<title>FirebaseTable</title>
					<meta charSet='utf-8' />
					<meta name='viewport' content='initial-scale=1.0, width=device-width' />
					<link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css' />
					<link rel='stylesheet' href='../static/styles/style.css' />
				</Head>
				<Header {...props} className={`nav ${''} ${affix}`}>
					<Col md={24} className="navbar">
						<img src="../static/images/logo-firebasetable.png" className="logo"/>
						<ul className="nav-group">
							<li className="nav-list"><Link className="nav-button" to="home">Home</Link></li>
							<li className="nav-list"><Link className="nav-button" to="price">Pricing</Link></li>
							<li className="nav-list"><Link className="nav-button">Sign In</Link></li>
							<li className="nav-list buttonList"><Button type="primary">Sign Up</Button></li>
						</ul>
					</Col>
		    </Header>

			  <Layout id="home">
					<div className="demo-crud">
						<img src="../static/images/TwitGif.gif" className="content-crud"/>
					</div>
					<div className="scrolling">
						<p>Explore FirebaseTable</p>
						<Link className="button-scroll" to="home."><Icon type="down-circle" /></Link>
					</div>
				</Layout>

				<Layout className="Landing" id="home.">
					<Home />
				</Layout>

				<Layout className="Price" id="price">
					<Pricing />
				</Layout>
			</Layout>
		)
	}
}
