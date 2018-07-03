import React from "react";
import { CardPanel, Row, Col } from 'react-materialize';


const DataPanel = ({ children }) => (
  <div >
    <Row>
      <Col s={12} m={12}>
        <CardPanel
          className="red lighten-4 black-text cardPanelCenter"
        >
          {children}
        </CardPanel>
      </Col>
    </Row>
  </div>
);

export default DataPanel;

