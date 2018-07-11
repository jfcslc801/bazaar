import React from "react";
import "./ItemListing.css";
import { Card, CardTitle, Row, Col, CardPanel, Button } from 'react-materialize';
import CustomModal from "./../../components/Modal";
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


const ItemListing = (props) => (
  <div >
    <Row>
      <Col s={12} m={12}>
        {/* <CardPanel className="red black-text cardPanelCenter" > */}

        <Card header={<CardTitle reveal waves='light' />}

          title={props.name}
          reveal={

            <div>
              <CustomModal>
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



              </CustomModal>
            </div >

          }>
          <img className="imgSize"
            alt={props.name}
            src={props.image}
          />
          <p>{props.value}</p>
          <p>{props.location}</p>
          <p>{props.userId}</p>


          <Button style={{ bottom: '-15px', right: '15px' }} floating large className='red' waves='light' icon='delete' onClick={(event) => props.removeListed(event, props.id)} />
          {/* <Button style={{ bottom: '-15px', right: '10px' }} floating right tiny className='yellow' waves='light' icon='favorite' onClick={(event) => props.removeListed(event, props.id)} /> */}

        </Card>
      </Col>
    </Row>




  </div>
);

export default ItemListing;

