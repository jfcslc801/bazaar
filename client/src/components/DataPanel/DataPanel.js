import React from "react";
import { CardPanel, Row, Col } from 'react-materialize';


const DataPanel = ({ children }) => (
  <div >
    <Row>
      <Col >
        <CardPanel 
          class="transparent z-depth-0" className="red"
        >
          {children}
        </CardPanel>
      </Col>
    </Row>
  </div>
);

export default DataPanel;

