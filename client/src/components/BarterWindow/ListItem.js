import React from "react";
import { CollapsibleItem } from 'react-materialize';
import "./List.css";

// Example of what the incoming props are
// let dbOffer = {
//   date: "09/09/09",
//   offer: "iPhone SE 64GB",
//   itemDetails: "It is a great condition phone, AT&T Network",
//   user: "Izzlenizzle"
// }

export const ListItem = props => (
  <CollapsibleItem header={`Date: ${props.date} Offer: ${props.offer}`} >
    <span className='head-left'> User: {props.user}</span>
    <span className='head-object'> Offer: {props.offer}</span>
    <span className='head-object'> Details: {props.itemDetails}</span>
  </CollapsibleItem>
);