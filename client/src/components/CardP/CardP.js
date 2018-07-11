import React from "react";
import { CardPanel, Row, Col } from 'react-materialize';


const CardP1 = ({ children }) => (
  <div >
    <Row>
      <Col >
        <CardPanel 
          class="transparent z-depth-0"
        >
          {children}
        </CardPanel>
      </Col>
    </Row>
  </div>
);

export default CardP1;