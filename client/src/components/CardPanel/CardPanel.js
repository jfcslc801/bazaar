import React from "react";
import "./CardPanel.css";
import { CardPanel, Row, Col, Table } from 'react-materialize';
// import "./ItemCard.css";
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

const CustomCardPanel = (props) => (
  <div>
    <Row>
      <Col s={12} m={12}>
        <CardPanel className="red black-text cardPanelCenter">
          <img className="imgSize"
            alt={props.name}
            src={props.image}
          />

          <CustomModal>
            {/* <List>
						<ListItem
							date={dbOffer.date}
							offer={dbOffer.offer}
							itemDetails={dbOffer.itemDetails}
							user={dbOffer.user}
						>
						</ListItem>
					</List> */}

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
          <p>{props.name}</p>
          <p>{props.value}</p>
          <p>{props.location}</p>
          <p>{props.userId}</p>
          <p>{props.id}</p>
          <span onClick={() => props.removeListed(props.id)} className="remove">
            𝘅
        </span>
        </CardPanel>
      </Col>
    </Row>
  </div>
);

export default CustomCardPanel;

