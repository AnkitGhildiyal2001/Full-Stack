import React, { useEffect, useState } from "react";
import { Card, Button } from 'react-bootstrap';
import Flickity from "react-flickity-component";
import './Home.css';

import './css/bootstrap.min.css'
import NavBar from './navbar/navbar.js';
import Footer from './footer/footer.js';

import gra1 from "./cov_corusal/gra1.png";
import gra2 from "./cov_corusal/gra2.png";
import gra3 from "./cov_corusal/gra3.png";
import gra4 from "./cov_corusal/gra4.png";
import gra5 from "./cov_corusal/gra5.png";
import gra6 from "./cov_corusal/gra6.png";
import "./flickity.css";
// import Card from '@bit/react-bootstrap.react-bootstrap.card';
// import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';


const Carousel = (props) => {
    let flkty;
    let [carouselIndex, setCarouselIndex] = useState(null);

    const handleChange = (index) => {
        setCarouselIndex(index); // Not working
        console.log({ carouselIndex, index });
    };

    useEffect(() => {
        if (flkty) {
            console.log("this ran");
            flkty.on("settle", () => {
                console.log(`current index is ${flkty.selectedIndex}`);
            });

            flkty.on("change", (index) => {
                handleChange(index);
            });
        }
    }, [carouselIndex]);

    return (
        <Flickity
            flickityRef={(c) => (flkty = c)}
            options={{ initialIndex: 3, wrapAround: true, autoPlay: true }}
        >
            <Card className="caro_card">
                <Card.Img variant="top" src={gra1} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <Button class="carousel_button" variant="info">Know More</Button>
                    </small>
                </Card.Footer>
            </Card>
            <Card className="caro_card">
                <Card.Img variant="top" src={gra2} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <Button class="carousel_button" variant="info">Know More</Button>
                    </small>
                </Card.Footer>
            </Card>
            <Card className="caro_card">
                <Card.Img variant="top" src={gra3} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <Button class="carousel_button" variant="info">Know More</Button>
                    </small>
                </Card.Footer>
            </Card>
            <Card className="caro_card">
                <Card.Img variant="top" src={gra4} />
                <Card.Body>
                    <Card.Title>Covid In INDIA</Card.Title>
                    <Card.Text>
                        Government of India is taking all necessary steps to ensure that we are prepared well to face the challenge and threat posed by the growing pandemic of COVID-19 the Corona Virus.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <Button class="carousel_button" variant="info">Know More</Button>
                    </small>
                </Card.Footer>
            </Card>
            <Card className="caro_card">
                <Card.Img variant="top" src={gra5} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <Button class="carousel_button" variant="info">Know More</Button>
                    </small>
                </Card.Footer>
            </Card>
            <Card className="caro_card">
                <Card.Img variant="top" src={gra6} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <Button class="carousel_button" variant="info">Know More</Button>
                    </small>
                </Card.Footer>
            </Card>
        </Flickity>
    );
};


const Home = () => {
    return (
        <div>

            <NavBar />

            <div className="banner myclass" >
                <div className="caption-container">
                    <div className="caption">
                        <h1> Covid-19</h1>
                        <p>With COVID-19, we’ve made it to the life raft. Dry land is far away</p>

                    </div>
                </div>
            </div>
            <br />

            <Carousel /><br />

            <Footer />

        </div>
    );
}

export default Home;