import React from "react";
import "./ItemListing2.css";
import API from "../../utils/API";
import { Card, CardTitle, Row, Col, CardPanel, Button } from 'react-materialize';
import SimpleModalWrapped2 from "./../../components/OfferModal";
import { List, ListItem, Table1, TableItem } from './../../components/BarterWindow';


let dbOffer = [{
  id: 1,
  date: "09/09/09",
  offer: "iPhone SE 64GB",
  itemDetails: "It is a great condition phone, AT&T Network",
  user: "Izzlenizzle"
},
{
  id: 2,
  date: "09/09/09",
  offer: "iPhone SE 64GB",
  itemDetails: "It is a great condition phone, AT&T Network",
  user: "Izzlenizzle"
},
{
  id: 3,
  date: "09/09/09",
  offer: "iPhone SE 64GB",
  itemDetails: "It is a great condition phone, AT&T Network",
  user: "Izzlenizzle"
},
{
  id: 4,
  date: "09/09/09",
  offer: "iPhone SE 64GB",
  itemDetails: "It is a great condition phone, AT&T Network",
  user: "Izzlenizzle"
}]


const ItemListing2 = (props) => (
  <div >
    <Col s={12} m={12}>
      <Card header={<CardTitle reveal />}
        title={props.name}
        reveal={
          <div>
            <p>{props.name}</p>
            <p>{props.value}</p>
            <p>{props.location}</p>
            <p>{props.userId}</p>
          </div >
        }>
        <img className="imgSize"
          alt={props.name}
          src={props.image}
        />
        <p>{props.value}</p>
        <p>{props.location}</p>
        <p>{props.userId}</p>
        <SimpleModalWrapped2 >
          <Table1>
            {dbOffer.map(offer => (
              <TableItem
                key={offer.id}
                user={offer.user}
                date={offer.date}
                offer={offer.offer}
              />
            ))}
          </Table1>
        </SimpleModalWrapped2>
        {/* <Button style={{ bottom: '-15px', right: '15px' }} floating large className='grey' waves='light' icon='close' onClick={(event) => props.removeListed(event, props.id)} /> */}
        {/* <Button style={{ bottom: '-15px', right: '15px' }} floating tiny className='red' waves='green' icon='delete' onClick={(event) => props.removeListed(event, props.id)}/> */}
        {/* <Button onClick={() => this.deleteBook(listed._id)}  /> */}
        {/* <Button style={{ bottom: '-15px', right: '10px' }} floating  large className='black' waves='light' icon='library_add' onClick={(event) => props.saveItem(event, props.id)} /> */}
      </Card>
    </Col>
  </div>
);

export default ItemListing2;

