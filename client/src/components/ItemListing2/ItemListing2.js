import React, { Component } from 'react';
import "./ItemListing2.css";
import API from "../../utils/API";
import { Card, CardTitle, Row, Col, CardPanel, Button } from 'react-materialize';
import SimpleModalWrapped2 from "./../../components/OfferModal";
import { List, ListItem, TableItem, Table1 } from './../../components/BarterWindow';
// import Table1 from './../../components/BarterWindow';


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


class ItemListing2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemOffers: null
    };
  };

  componentDidMount() {
    console.log('mounted' + this.props.name);
    // api call to get offers for this particular item and store them into state
    this.getOffers();

  }

  getOffers = () => {
    API.getOffers(this.props.id)
    .then(res =>
      this.setState({ itemOffers: res.data })
    )
    .catch(err => console.log(err));
  }


  render() {

    return (
      <div >
        <Col s={12} m={12}>
          <Card header={<CardTitle reveal />}
            title={this.props.name}
            reveal={
              <div>
                <p>{this.props.name}</p>
                <p>{this.props.value}</p>
                <p>{this.props.location}</p>
                <p>{this.props.userId}</p>
              </div >
            }>
            <img className="imgSize"
              alt={this.props.name}
              src={this.props.image}
            />
            <p>{this.props.value}</p>
            <p>{this.props.location}</p>
            <p>{this.props.userId}</p>
            <SimpleModalWrapped2 >
              <Table1
                getOffers={this.getOffers}
                // pass id of item to be used for saving info
                id={this.props.id}
                auth={this.props.auth}
              >
                {this.state.itemOffers &&
                  this.state.itemOffers.map(offer => (
                    <TableItem
                      key={offer.id}
                      user={offer.email}
                      date={offer.date}
                      offer={offer.offer}
                    />
                  ))
                }
              </Table1>
            </SimpleModalWrapped2>
            {/* <Button style={{ bottom: '-15px', right: '15px' }} floating large className='grey' waves='light' icon='close' onClick={(event) => props.removeListed(event, props.id)} /> */}
            {/* <Button style={{ bottom: '-15px', right: '15px' }} floating tiny className='red' waves='green' icon='delete' onClick={(event) => props.removeListed(event, props.id)}/> */}
            {/* <Button onClick={() => this.deleteBook(listed._id)}  /> */}
            {/* <Button style={{ bottom: '-15px', right: '10px' }} floating  large className='black' waves='light' icon='library_add' onClick={(event) => props.saveItem(event, props.id)} /> */}
          </Card>
        </Col>
      </div>
    )

  }



}

export default ItemListing2;

