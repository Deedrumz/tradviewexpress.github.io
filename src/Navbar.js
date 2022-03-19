import React from 'react'
import { Link } from 'react-router-dom'
import logo from './img/logo.svg'
import './Navbar.css'
import './Instant'
import './Welcome'
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const Navbarfunc = () => {
  return (
      <div>
          
          {/* NAVBAR FOR MOBILE VIEW */}

                        <Navbar className='navall' expand="lg">
                                    <Container>
                                        <Link to='/'><img src= {logo} alt="" /></Link>   
                                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                        <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto">
                                            <Nav.Link id='navlink' href="/Instant">Instant Buy/Sell</Nav.Link>
                                            <Nav.Link id='navlink' href="#link">Learn</Nav.Link>
                                            
                                            <Nav id='movelogin1'>
                                             <Link to='/Login'><button id='login1'>LOGIN</button></Link>   
                                            </Nav>
                                            
                                            <Nav className='movegt'>
                                           <Link to='/Welcome'><Button className='gt' variant="primary" size="">GET STARTED</Button></Link> 
                                            </Nav>
                          
                                        </Nav>
                                        </Navbar.Collapse>
                                    </Container>
                        </Navbar>


{/* NAVBAR FOR DESKTOP VIEW 1025 */}

                            <Navbar className='navdeskall' expand="lg">
                                    <Container>
                                        <img src= {logo} alt="" />
                                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                        <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto">
                                            <Nav.Link id='navlink' href="#home">Instant Buy/Sell</Nav.Link>
                                            <Nav.Link id='navlink' href="#link">Learn</Nav.Link>
                                            
                                            <Nav id='movelogin1'>
                                                <button id='login1'>LOGIN</button>
                                            </Nav>
                                            
                                            <Nav className='movegt'>
                                            <Button className='gt' variant="primary" size="">GET STARTED</Button>
                                            </Nav>
                          
                                        </Nav>
                                        </Navbar.Collapse>
                                    </Container>
                            </Navbar>











    </div>
  )
}

export default Navbarfunc