/*import React from 'react'
import "./style.css"
import { Link } from "react-router-dom";

function Item({item}) {
  return (
    <div className='item'>
       <Link to={`/quotes/${item.quote_id}`}>
<q>{item.quote}</q>
<span>
  <strong> - {item.author}</strong>
</span>
</Link>

    </div>
  )
}

export default Item
*/

import React from "react";
import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <div className="item">
      <Link to={`/quotes/${item.quote_id}`}>
        <q>{item.quote} </q>      
      <strong> {item.author}</strong>
      </Link>
    </div>
  );
}

export default Item;



