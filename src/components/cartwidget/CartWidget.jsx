import {BsCartFill} from "react-icons/bs"
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CartWidget = ({counter}) => {
    const {cartQuantity}= useContext (CartContext)
    return (
        <div>
        
        { cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>} 
        <BsCartFill  fontSize={'2rem'}/>
        </div>
    )
}

export default CartWidget