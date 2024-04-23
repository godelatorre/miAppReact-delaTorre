import React from "react";
import "./Item.css";
import {Link} from 'react-router-dom'

const Item = ({ producto }) => {
    return (
      <div className="item">
        <img
          src={producto.image}
          alt={producto.name}
          className="item-image"
        />
        <div className="item-details">
          <h3 className="item-title">{producto.name}</h3>
          <p className="item-price">${producto.price}.000</p>
          <Link to={`/item/${producto.id}`} className="item-link">
            Ver más
          </Link>
        </div>
      </div>
    );
  };
  
  export default Item;


