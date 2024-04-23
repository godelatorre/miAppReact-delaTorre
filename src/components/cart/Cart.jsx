import React, { useContext } from 'react'
import CartView from '../cartView/CartView'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      {!cart.length ? (
        <div style={{ color: 'yellow', fontSize: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '20px', padding: '20px', border: '1px solid green', borderRadius: '5px' }}>
          <h2> Tu Carrito Esta Vacio!! </h2>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h4 style={{ marginRight: '10px' }}>Te invitamos a recorrer y visitar nuestro banco de semillas</h4>
            <img src="https://i.postimg.cc/T2QZPyQF/hoja-Pensativa.jpg" alt="Semillas" style={{ width: '150px', height: '150px' }} />
          </div>
          <Link style={{ margin: '20px', padding: '10px', backgroundColor: 'green', color: 'white', textDecoration: 'none', borderRadius: '5px' }} to='/'>IR A COMPRAR</Link>
        </div>
      ) : (
        <CartView />
      )}
    </div>
  );
}

export default Cart; 