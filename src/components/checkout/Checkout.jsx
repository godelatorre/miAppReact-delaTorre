import React, { useContext, useState } from 'react';
import './Checkout.css';
import { CartContext } from '../../context/CartContext';
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { Link } from 'react-router-dom';

const Checkout = () => {
  
  const [validateEmail, setValidateEmail] = useState('')
  const [user, setUser] = useState('')
  const [orderId, setOrderId] = useState('')

  const { cart, cartPriceTotal, clear } = useContext(CartContext)

  const userData = (e) => {
    setUser(
      {
        ...user,
        [e.target.name]: e.target.value
      }
    )

  }

  const finalizarCompra = (e) => {
    e.preventDefault()
    if (!user.name && !user.lastname && !user.email) {
      alert('Los campos son obligatorios')
    } else if (user.email !== validateEmail) {
      alert('Los mails deben ser iguales')
    } else {
      //objeto de la orden
      let order = {
        user,
        items: cart,
        total: cartPriceTotal(),
        date: serverTimestamp()

      } 

      const ventas = collection(db, "orders")
      addDoc(ventas, order)
        .then((res) => {
          //para actualizar stock

          cart.forEach((item)=>{
            const docRef = doc(db, 'productos', item.id)
            getDoc(docRef)
            .then((dbDoc)=>{
              updateDoc(docRef, {stock: dbDoc.data().stock - item.quantity})
            })
          })
          setOrderId(res.id)
          clear()
        })
        .catch((error) => console.log(error))
    }

  }



  return (
    <div style={{ textAlign: 'center' }}>
      {
      orderId !== '' 
      ? (
        <div style={{ color: '#fafafa' }} >
          <h3>¡Tu compra se generó con éxito!</h3>
          <img src="https://i.postimg.cc/65LQD5BY/sema.jpg" alt="Semillas" style={{ width: '200px', height: '200px' }} />
          <h5> El número de orden es: {orderId} </h5>
          <Link to='/'>Volver a Home</Link>
        </div>
      )
      : (
        <div>
          <h4>Completa con tus datos</h4>
          <form className='d-flex flex-column align-items-center' onSubmit={finalizarCompra}>
            <input name='name' placeholder='Ingrese su Nombre' type='text' onChange={userData} />
            <input name='lastname' placeholder='Ingrese su Apellido' type='text' onChange={userData} />
            <input name='phone' placeholder='Ingrese su Numero de Telefono' type='tel' onChange={userData} />
            <input name='email' placeholder='Ingrese su Correo' type='email' onChange={userData} />
            <input name='second-email' placeholder='Repita su Correo' type='email' onChange={(e) => setValidateEmail(e.target.value)} />

            <button type='submit'>Enviar</button>
          </form>
        </div>
      )
      }
    </div>
  );
}

export default Checkout;
