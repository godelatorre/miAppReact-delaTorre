import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsTrash } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const CartView = () => {
    const { cart, removeItem, cartPriceTotal, clear } = useContext(CartContext)

    return (
        <div style={{ color: 'white' }}>
            <h2 style={{ color: 'white' }}>TU CARRITO</h2>
            <div>
                {cart.map((compra) => {
                    return (
                        <div key={compra.id} style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '2rem' }}>
                            <img src={compra.image} alt={compra.name} style={{ width: '8rem' }} />
                            <span style={{ color: 'white' }}>{compra.name}</span>
                            <span style={{ color: 'white' }}>{compra.quantity}</span>
                            <span style={{ color: 'white' }}>${compra.price},000</span>
                            <span style={{ color: 'white' }}>Precio Final: ${compra.price * compra.quantity},000</span>
                            <button className='btn btn-danger' onClick={() => removeItem(compra.id)}><BsTrash /></button>
                        </div>
                    )
                })}
            </div>
            <p style={{ color: 'white' }}>Total A Pagar: ${cartPriceTotal()},000</p>
            <div style={{ textAlign: 'center' }}>
                <button className='btn btn-primary' onClick={clear}>VACIAR CARRITO</button>
                <div style={{ marginTop: '10px' }}>
                <Link className='btn btn-success' to='/checkout'>FINALIZAR COMPRA</Link>
                </div>
            </div>





        </div>
    )
}

export default CartView



