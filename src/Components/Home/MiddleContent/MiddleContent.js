
import './MiddleContent.css';
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Table } from 'react-bootstrap';

function MiddleContent() {
  return (
    <div>

      <div className="mytxt">
        <h3 className="blue"><strong>Get vacinated, stay healthy.</strong></h3>
        <p>There are four types of vaccines in clinical trials: whole virus, protein subunit, viral vector and<br /> nucleic acid (RNA and DNA), each of which protects people, but by producing immunity in a slightly different way.</p>
      </div>


      <div className="MYclass1">
        <div className="variant_Head1">Alpha variant of coronavirus</div>
        <Table striped bordered hover variant="light" className="tbl">
          <thead>
            <tr>
              <th>WHO label</th>
              <th>Alpha </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Pango lineages</th>
              <th>B.1.1.7</th>
            </tr>
            <tr>
              <th>GISAID clade</th>
              <th>GRY</th>
            </tr>
            <tr>
              <th>Nextstrain clade</th>
              <th>20I (V1)</th>
            </tr>
            <tr>
              <th>Additional amino acid changes monitored</th>
              <th>+S:484K &nbsp;&nbsp; +S:452R</th>
            </tr>
            <tr>
              <th>Earliest documented samples</th>
              <th>United Kingdom, Sep-2020</th>
            </tr>
            <tr>
              <th>Date of designation</th>
              <th>18-Dec-2020</th>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className="MYclass2">
        <div className="variant_Head2">Beta variant of coronavirus</div>
        <Table striped bordered hover variant="dark" className="tbl">
          <thead>
            <tr>
              <th>WHO label</th>
              <th>Beta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Pango lineages</th>
              <th>B.1.351 &nbsp;&nbsp; B.1.351.2 &nbsp;&nbsp; B.1.351.3</th>
            </tr>
            <tr>
              <th>GISAID clade</th>
              <th>GH/501Y.V2</th>
            </tr>
            <tr>
              <th>Nextstrain clade</th>
              <th>20H (V2)</th>
            </tr>
            <tr>
              <th>Additional amino acid changes monitored</th>
              <th>+S:L18F</th>
            </tr>
            <tr>
              <th>Earliest documented samples</th>
              <th>South Africa, May-2020</th>
            </tr>
            <tr>
              <th>Date of designation</th>
              <th>18-Dec-2020</th>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className="MYclass3">
        <div className="variant_Head1">Gamma variant of coronavirus</div>
        <Table striped bordered hover variant="light" className="tbl">
          <thead>
            <tr>
              <th>WHO label</th>
              <th>Gamma</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Pango lineages</th>
              <th>P.1 &nbsp;&nbsp; P.1.1 &nbsp;&nbsp; P.1.2</th>
            </tr>
            <tr>
              <th>GISAID clade</th>
              <th>GR/501Y.V3</th>
            </tr>
            <tr>
              <th>Nextstrain clade</th>
              <th>20J (V3)</th>
            </tr>
            <tr>
              <th>Additional amino acid changes monitored</th>
              <th>+S:681H</th>
            </tr>
            <tr>
              <th>Earliest documented samples</th>
              <th>Brazil, Nov-2020</th>
            </tr>
            <tr>
              <th>Date of designation</th>
              <th>11-Jan-2021</th>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className="MYclass4">
        <div className="variant_Head2">Delta variant of coronavirus</div>
        <Table striped bordered hover variant="dark" className="tbl">
          <thead>
            <tr>
              <th>WHO label</th>
              <th>Delta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Pango lineages</th>
              <th>B.1.617.2 &nbsp;&nbsp; AY.1 &nbsp;&nbsp; AY.2 &nbsp;&nbsp; AY.3</th>
            </tr>
            <tr>
              <th>GISAID clade</th>
              <th>G/478K.V1</th>
            </tr>
            <tr>
              <th>Nextstrain clade</th>
              <th>21A</th>
            </tr>
            <tr>
              <th>Additional amino acid changes monitored</th>
              <th>+S:417N</th>
            </tr>
            <tr>
              <th>Earliest documented samples</th>
              <th>India, Oct-2020</th>
            </tr>
            <tr>
              <th>Date of designation</th>
              <th>VOI: 4-Apr-2021 VOC: 11-May-2021</th>
            </tr>
          </tbody>
        </Table>
      </div>

    </div>
  );
}

export default MiddleContent;