import React from "react";
import "./CardPanel.css";
import { CardPanel, Row, Col, Table } from 'react-materialize';


const CustomCardPanel = (props) => (
  <div>
    <Row>
      <Col s={12} m={12}>
        <CardPanel className="red black-text cardPanelCenter">
          <img className="imgSize"
            alt={props.name}
            src={props.image}
          />
          <p>{props.name}</p>
          <p>{props.value}</p>
          <p>{props.location}</p>
          <p>{props.userId}</p>
          <p>{props.id}</p>
          <span onClick={() => props.removeListed(props.id)} className="remove">
            𝘅
        </span>
        </CardPanel>
      </Col>
    </Row>
  </div>
);

export default CustomCardPanel;

