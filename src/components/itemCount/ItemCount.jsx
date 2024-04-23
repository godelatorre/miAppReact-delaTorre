import React from 'react'
import { useState } from 'react'
import './ItemCount.css';


const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);


    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const restar = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const enviarCantidad = () => {
        onAdd(count);
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <button className="btn btn-danger" onClick={restar}>-</button>
                <span className="btn counter">{count}</span>
                <button className="btn btn-success" onClick={sumar}>+</button>
            </div>

            <button className="btn btn-primary" disabled={stock === 0 || count === 0} onClick={enviarCantidad}>AÑADIR AL CARRITO</button>

            {stock === 0 && <div className="text-center mt-3" style={{ textTransform: 'uppercase', color: '#FF0000', fontSize: '1.2em' }}>
                ..Lo siento, no hay más stock.. 😞
            </div>
            }

        </>
    );

};



export default ItemCount;