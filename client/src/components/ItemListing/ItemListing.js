import React from "react";
import "./ItemListing.css";
import { Card, CardTitle, Row, Col, CardPanel } from 'react-materialize';


const ItemListing = (props) => (
  <div >
    <Row>
      <Col s={12} m={12}>
        {/* <CardPanel className="red black-text cardPanelCenter" > */}

        <Card header={<CardTitle reveal waves='light' />}

          title={props.name}
          reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
          <img className="imgSize"
            alt={props.name}
            src={props.image}
          />
          <p><a href="#">This is a link</a></p>
          <span onClick={(event) => props.removeListed(event, props.id)} className="remove">
            𝘅
        </span>
        </Card>
        {/* </CardPanel> */}
      </Col>
    </Row>


  </div>
);

export default ItemListing;

