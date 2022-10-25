import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../logo.jpg';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col>
                        <Link className='navbar-brand text-2xl' to="/">
                            <img className='logo-img' src={logo} alt="" /><small className='h3'>Bizon's Learning</small>
                        </Link>

                    </Col>
                    <Col xs={6}>2 of 3 (wider)</Col>
                    <Col>
                        <Link>Terms of Use</Link>
                        <Link>Privacy Policy</Link>

                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Footer;