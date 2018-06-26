import React from "react";
import { Collapsible } from 'react-materialize';
import "./List.css";

export const List = ({ children }) => {
  return (
    <Collapsible>
      {children}
    </Collapsible>
  );
};