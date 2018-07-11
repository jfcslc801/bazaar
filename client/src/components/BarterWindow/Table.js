import React from "react";
import { Table, Input, Row } from 'react-materialize';
import "./List.css";

export const Table1 = ({ children }) => {
  return (

        <Row>
          <h6>Current Offers{children && (`: ${children.length}`)}</h6>
          <Table className='offer-table'>

            <thead>
              <tr>
                <th data-field="date">Date</th>
                <th data-field="user">User</th>
                <th data-field="offer">Offer</th>
              </tr>
            </thead>

            <tbody>
              {children ? (
                children
              ) : (
                  <h5>There are no current offers, be the first to offer!</h5>
                )}
            </tbody>

          </Table>
          <hr />
          <h6>Make an Offer</h6>
          <Input className='offer' s={12} label="New Offer" />
        </Row>

  );
};