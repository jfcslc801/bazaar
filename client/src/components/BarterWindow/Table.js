import React from "react";
import { Table, Input, Row } from 'react-materialize';
import "./List.css";

export const Table1 = ({ children }) => {
  return (

        <Row>
          <h4>Current Offers{children && (`: ${children.length}`)}</h4>
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
          <h4>Make an Offer</h4>
          <Input className='offer' s={12} label="New Offer" />
        </Row>

  );
};