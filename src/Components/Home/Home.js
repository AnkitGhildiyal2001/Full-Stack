import react from 'react'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { CardDeck } from 'react-bootstrap'
import './Home.css';

// import 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700'
import './fonts/icomoon/style.css'
import './css/owl.carousel.min.css'
import './css/bootstrap.min.css'
import './css/style.css'

import './js/jquery-3.3.1.min.js'
import './js/popper.min.js'
// import './js/bootstrap.min.js'
// import './js/jquery.sticky.js'
import './js/main.js'

const Home = () => {
    return (
        <div>
            <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>

            <header className="site-navbar" role="banner">

                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-11 col-xl-2">
                            <h1 className="mb-0 site-logo"><a href="index.html" class="text-white mb-0">Brand</a></h1>
                        </div>
                        <div className="col-12 col-md-10 d-none d-xl-block">
                            <nav className="site-navigation position-relative text-right" role="navigation">

                                <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                                    <li className="active"><a href="index.html"><span>Home</span></a></li>
                                    <li className="has-children">
                                        <a href="about.html"><span>Dropdown</span></a>
                                        <ul className="dropdown arrow-top">
                                            <li>Menu One</li>
                                            <li>Menu Two</li>
                                            <li>Menu Three</li>
                                            <li className="has-children">
                                                Dropdown
                                                <ul className="dropdown">
                                                    <li>Menu One</li>
                                                    <li>Menu Two</li>
                                                    <li>Menu Three</li>
                                                    <li>Menu Four</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="listings.html"><span>Listings</span></a></li>
                                    <li><a href="about.html"><span>About</span></a></li>
                                    <li><a href="blog.html"><span>Blog</span></a></li>
                                    <li><a href="contact.html"><span>Contact</span></a></li>
                                </ul>
                            </nav>
                        </div>

                        <div class="d-inline-block d-xl-none ml-md-0 mr-auto py-3 mystyle" ><a href="#" class="site-menu-toggle js-menu-toggle text-white"><span class="icon-menu h3"></span></a></div>

                        {/* style="position: relative; top: 3px;" */}


                    </div>

                </div>
            </header>



            <div className="toppor">
                <img className="hmimg" src="https://images.unsplash.com/photo-1583324113626-70df0f4deaab?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29yb25hfHx8fHx8MTYyNTQ5ODYwNQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600" alt="..." />

                <div className="txtonimg">
                    Covid-19
                </div>
            </div>

            <CardDeck className="marg">
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardDeck>

            <CardDeck className="marg">
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardDeck>

        </div >
    )
}

export default Home