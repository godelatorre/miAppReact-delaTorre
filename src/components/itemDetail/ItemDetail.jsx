import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'; 
import ItemCount from '../itemCount/ItemCount';
import './ItemDetail.css';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ producto }) => {
  const [compra, setCompra] = useState(false);
  const { addItem, compraQuantity } = useContext(CartContext);

  const onAdd = (cantidad) => {
    addItem(producto, cantidad);
    setCompra(true);
  };

  const stockInCart = compraQuantity (producto.id)
  return (
    <div className="item-detail">
      <h3 style={{ color: producto.stock < 5 ? 'red' : 'yellow' }}>Detalle de: {producto.name} </h3>
      <img alt={producto.name} src={producto.image} />
      <p>{producto.description}</p>
      <p>${producto.price}.000</p>

      {compra && <p>¡Ya agregaste {producto.name} al carrito! 😊</p>}
      {producto.stock < 5 && <p>¡Aprovecha esta oferta y haz crecer tu propio jardín de posibilidades! 🌿🌱😲</p>}

      {compra ? (
        <Link to="/cart" className='btn btn-success'>IR AL CARRITO</Link>
      ) : (
        <ItemCount stock={producto.stock - stockInCart} onAdd={onAdd} />
      )}
    </div>
  );
}

export default ItemDetail;


