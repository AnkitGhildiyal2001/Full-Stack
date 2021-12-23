import React, { useEffect, useState } from "react";
import { Card, Button } from 'react-bootstrap';
import Flickity from "react-flickity-component";
import './Home.css';
import { Link } from "react-router-dom";

import './css/bootstrap.min.css'
import NavBar from './navbar/navbar.js';
import Footer from './footer/footer.js';
import MiddleContent from "./MiddleContent/MiddleContent.js";

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
            options={{ initialIndex: 3, wrapAround: true, autoPlay: true, pageDots: false }}
        >
            <Card className="caro_card">
                <Card.Img variant="top" src={gra1} />
                <Card.Body>
                    <Card.Title>Why Cases Increase?</Card.Title>
                    <Card.Text>
                        The overall pattern so far has been one of increasing cases of COVID-19, with a surge in the summer and a larger one in the fall.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <Link target="_blank" to="/Cases_Increase_Home_carousal"><Button class="carousel_button" variant="info">Know More</Button></Link>
                    </small>
                </Card.Footer>
            </Card>
            <Card className="caro_card">
                <Card.Img variant="top" src={gra2} />
                <Card.Body>
                    <Card.Title>Keep a Safe Distance in Public</Card.Title>
                    <Card.Text>
                        The virus mainly spreads when someone breathes, talks, coughs, or sneezes, which sends tiny droplets into the air. People standing nearby can get these droplets in their eyes, nose, or mouth, or they can breathe them in.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <Link target="_blank" to="/Social_Distance_Home_carousal"><Button class="carousel_button" variant="info">Know More</Button></Link>
                    </small>
                </Card.Footer>
            </Card>
            <Card className="caro_card">
                <Card.Img variant="top" src={gra3} />
                <Card.Body>
                    <Card.Title>COVID vaccination</Card.Title>
                    <Card.Text>
                        To bring this pandemic to an end, a large share of the world needs to be immune to the virus. The safest way to achieve this is with a vaccine.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <Link target="_blank" to="/Covid_Vacination_Home_carousal"><Button class="carousel_button" variant="info">Know More</Button></Link>
                    </small>
                </Card.Footer>
            </Card>
            <Card className="caro_card">
                <Card.Img variant="top" src={gra4} />
                <Card.Body>
                    <Card.Title>What is a ‘novel’ coronavirus?</Card.Title>
                    <Card.Text>
                        A novel coronavirus (CoV) is a new strain of coronavirus. The disease caused by the novel coronavirus first identified in Wuhan, China, has been named coronavirus disease 2019 (COVID-19) – ‘CO’ stands for corona, ‘VI’ for virus, and ‘D’ for disease.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <Link target="_blank" to="/Coronavirus_Home_carousal"><Button class="carousel_button" variant="info">Know More</Button></Link>
                    </small>
                </Card.Footer>
            </Card>
            <Card className="caro_card">
                <Card.Img variant="top" src={gra5} />
                <Card.Body>
                    <Card.Title>Covid In INDIA</Card.Title>
                    <Card.Text>
                        Government of India is taking all necessary steps to ensure that we are prepared well to face the challenge and threat posed by the growing pandemic of COVID-19 the Corona Virus.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <Link target="_blank" to="/Covid_India_Home_carousal"><Button class="carousel_button" variant="info">Know More</Button></Link>
                    </small>
                </Card.Footer>
            </Card>
            <Card className="caro_card">
                <Card.Img variant="top" src={gra6} />
                <Card.Body>
                    <Card.Title>Impact of COVID-19</Card.Title>
                    <Card.Text>
                        The COVID-19 pandemic has led to a dramatic loss of human life worldwide and presents an unprecedented challenge to public health, food systems and the world of work.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <Link target="_blank" to="/Impact_Home_carousal"><Button class="carousel_button" variant="info">Know More</Button></Link>
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

            <MiddleContent />

            <Footer />

        </div>
    );
}

export default Home;