import React from "react";
import { CardPanel, Row, Col } from 'react-materialize';


const DataPanel = ({ children }) => (
  <div>
    <Row>
      <Col s={12} m={12}>
        <CardPanel className="red lighten-4 black-text cardPanelCenter">
        <h1> welcome  </h1>
        <h1> welcome  </h1>
        <h1> welcome  </h1>
        </CardPanel>
      </Col>
    </Row>
  </div>
);

export default DataPanel;

