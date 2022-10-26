import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';
import logo from '../../../logo.jpg';
import './Header.css'
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className='header-container'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link className='navbar-brand' to="/"><img className='logo-img' src={logo} alt="" />Bizon's Learning</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='nav-link' to="/">Home</Link>
                            <Link className='nav-link' to="/courses">Courses</Link>
                            <Link className='nav-link' to="/blog">Blog</Link>
                            <Link className='nav-link' to="/faq">FAQ</Link>

                        </Nav>
                        <Nav>
                            <Link className='nav-link' to="/login">Login</Link>
                            <Nav.Link>
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;