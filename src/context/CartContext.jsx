import { createContext, useState } from "react"

// Contexto

export const CartContext = createContext()


// Proveedor del contexto

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            const nuevoCarrito = cart.map((compra) => {
                if (compra.id === item.id) {
                    return { ...compra, quantity: compra.quantity + quantity };
                }else {
                    return compra;

                }
               
            });
            setCart(nuevoCarrito);
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    }
    

    //BORRAR los items del carrito
    const clear = () => {
        setCart([])
    }
    // REMOVER un item del carrito usando su id

    const removeItem = (itemId) => {
        const limpiarCarrito = cart.filter((compra) => compra.id !== itemId)
        setCart(limpiarCarrito)
    }

    const isInCart = (itemId) => {
        return cart.some((compra) => compra.id === itemId)

    }
    
    //SUMAR la cantidad total
    const cartQuantity = ()=> {
    
        return cart.reduce ((acc, compra)=>acc += compra.quantity, 0)

    }

    // SUMA DEL TOTAL

    const cartPriceTotal = ()=> {

        return cart.reduce((acc, compra)=>acc += (compra.price * compra.quantity), 0)

    }

    const compraQuantity = (id) => {
        const itemInCart = cart.find ((item)=> item.id ===id)
        if (itemInCart){
            return itemInCart.quantity
        }else{
            return 0
        }
    }

    return (
        
        <CartContext.Provider value={{ cart, addItem, clear, removeItem, isInCart, cartQuantity, cartPriceTotal, compraQuantity }}>
            {children}
        </CartContext.Provider>
    )

}