import react from 'react'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { CardDeck } from 'react-bootstrap'
import './Home.css'

import './css/bootstrap.min.css'
import './css/style.css'

const Home = () => {
    return (
        <div>

            <header className="header clear" role="banner">
                <div className="row top">
                    <div className="d-lg-none col-4">
                        <a href="https://www.dash.org/#" className="menu-toggle menu-icon">
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </a>
                    </div>
                    <div className="col-lg-2 col-4">
                        <div className="logo">
                            <a href="https://www.dash.org/">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1438.15 421.17"
                                    preserveAspectRatio="xMidYMin meet">
                                    <title>Dash Logo</title>

                                    <path className="cls-1"
                                        d="M312.66,26.11H147.23l-13.71,76.63,149.28.18c73.52,0,95.26,26.69,94.64,71-.32,22.7-10.16,61.07-14.41,73.51-11.33,33.16-34.6,71-121.86,70.85l-145.11-.06L82.32,394.88H247.38c58.22,0,83-6.77,109.2-18.89,58.13-26.84,92.72-84.21,106.57-159.08C483.79,105.42,458.09,26.11,312.66,26.11Z">
                                    </path>
                                    <path className="cls-1"
                                        d="M824.28,395.06l11.66-66.63H977.26c11.1,0,18.88-6.67,20.54-17.77,2.22-11.11-3.33-17.77-14.43-17.77H915.8c-53.31,0-78.85-31.09-69.41-84.4s46.09-84.39,99.39-84.39h153.53l-12.21,66.63H951.79c-11.11,0-18.88,6.66-20.55,17.76-2.22,11.11,3.33,17.77,14.44,17.77h67.57c53.3,0,78.84,31.1,69.41,84.4s-45.54,84.4-98.84,84.4Z">
                                    </path>
                                    <path className="cls-1"
                                        d="M609.06,395.05c-87.74,0-127.17-47.76-111.62-135.5,15-87.73,71.64-135.49,159.37-135.49H812.3l-47.76,271ZM710.12,190.7h-40c-47.75,0-76,21.1-84.29,68.85-8.88,47.76,8.89,68.86,56.64,68.86h43.76Z">
                                    </path>
                                    <path className="cls-1"
                                        d="M1292,395.05l27.77-157.71c5-31.1-7.62-44.42-38.72-44.42h-44.22l-35.54,202.13h-90l65.07-368.94h90l-17.32,98h67.4c78.85,0,107.17,34.43,93.29,113.28l-27.77,157.71Z">
                                    </path>
                                    <path className="cls-1"
                                        d="M75.85,172c-43.33,0-49.54,28.24-53.64,45.3-5.37,22.35-7.13,31.4-7.13,31.4H184.46c43.33,0,49.54-28.24,53.64-45.3,5.37-22.35,7.13-31.4,7.13-31.4Z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="d-lg-none col-4 text-right">
                        <div className="lang-mobile">
                            <div className="dropdown">
                                <div className="wpml-ls-statics-shortcode_actions wpml-ls wpml-ls-legacy-list-horizontal">
                                    <ul>
                                        <li
                                            className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-en wpml-ls-current-language wpml-ls-first-item wpml-ls-item-legacy-list-horizontal">
                                            <a href="https://www.dash.org/" className="wpml-ls-link">
                                                <span className="wpml-ls-native">English</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-10 col-12">
                        <div className="navbar" id="navbar-main">
                            <div className="bg class1">
                                <div className="arrow"></div>
                            </div>

                            <div className="navbar-container">
                                <div className="navbar-item">
                                    <div className="link">
                                        <a href="https://www.dash.org/">
                                            Get Started </a>
                                    </div>

                                </div>
                                <div className="navbar-item">
                                    <div className="link">
                                        <a href="https://www.dash.org/institutions/">
                                            Institutions </a>
                                    </div>

                                </div>
                                <div className="navbar-item">
                                    <div className="link">
                                        <a href="https://www.dash.org/developers/">
                                            Developers </a>
                                    </div>

                                </div>
                                <div className="navbar-item">
                                    <div className="link">
                                        <a href="https://www.dash.org/community/">
                                            Community </a>
                                    </div>

                                </div>

                                <div className="navbar-item lang">
                                    <div className="link">
                                        <a href="https://www.dash.org/#">
                                            <span className="lang-current">
                                                English
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="banner myclass" >
                <div className="caption-container">
                    <div className="caption">
                        <h1> Covid-19</h1>
                        <p>With COVID-19, we’ve made it to the life raft. Dry land is far away</p>

                    </div>
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