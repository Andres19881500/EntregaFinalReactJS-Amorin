import {createContext} from 'react'
import { useState } from "react";

export const CartContext = createContext();

export const CartContextProvider =({children}) =>{
    const [cart, setCart] = useState([])
    
    const addItem = (producto, count) => {
    setCart([...cart,{...producto,count}])
    }
    console.log(cart);

    const getQuantity = () => {
        let cant = 0
        cart.forEach((e) => cant += e.count)
        return cant
    };
    
    return(
            <CartContext.Provider
            value={{cart, addItem, getQuantity}}>
                {children}
            </CartContext.Provider>
        )
 }
