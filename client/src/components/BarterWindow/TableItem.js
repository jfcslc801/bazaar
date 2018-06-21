import React from "react";
import "./List.css";

export const TableItem = props => (
    <tr>
      <td>{props.date}</td>
      <td>{props.user}</td>
      <td>{props.offer}</td>
    </tr>
);