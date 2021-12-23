import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <MDBFooter color="blue-grey" className="page-footer font-small lighten-5 pt-0">
      <div style={{ backgroundColor: "#21d192" }}>
        <MDBContainer>
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 black-text">
                Get connected with us on social networks!
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <a className="fb-ic ml-0">
                <i style={{ margin: '10px' }}><Link to="/blog"><img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png" width='20px' /></Link></i>
              </a>
              <a className="tw-ic">
                <i style={{ margin: '10px' }}><Link to="/blog"><img src="https://img-authors.flaticon.com/twitter.jpg" width='20px' /></Link></i>
              </a>
              <a className="gplus-ic">
                <i style={{ margin: '10px' }}><Link to="/blog"><img src="https://img-authors.flaticon.com/google.jpg" width='20px' /></Link></i>
              </a>
              <a className="li-ic">
                <i style={{ margin: '10px' }}><Link to="/blog"><img src="https://logodix.com/logo/91001.png" width='20px' /></Link></i>
              </a>
              <a className="ins-ic">
                <i style={{ margin: '10px' }}><Link to="/blog"><img src="https://facebookbrand.com/wp-content/uploads/2021/03/Instagram_AppIcon_Aug2017.png?w=300&h=300" width='20px' /></Link></i>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>ScumGang</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              This Site was Developed By Aman & Ankit
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Also Visit</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!" className="dark-grey-text">
                worldometers
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                covid19india
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                mygov.in
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                mohfw.gov.in
              </a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!" className="dark-grey-text">
                Home
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                About
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                Blog
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                Contact Us
              </a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <i className="fa fa-home mr-3" /> Dehradun, INDIA
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> me19b003@iittp.ac.in  ce19b005@iittp.ac.in
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <span> Aman & Ankit </span>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;