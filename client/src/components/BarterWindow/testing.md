import { List, ListItem } from './../../components/BarterWindow';

let dbOffer = {
  date: "09/09/09",
  offer: "iPhone SE 64GB",
  itemDetails: "It is a great condition phone, AT&T Network",
  user: "Izzlenizzle"
}


<List>
<ListItem
  date={dbOffer.date}
  offer={dbOffer.offer}
  itemDetails={dbOffer.itemDetails}
  user={dbOffer.user}
>
</ListItem>
</List>