import {createContext} from 'react'
import { useState } from "react";

export const CartContextProvider =({children}) =>{
    const [cart, setCart] = useState([])
    
    const addItem = (item, count) => {
    setCart([...cart,{...item,count}])
    }
    
    return(
            <CartContext.Provider
            value={{cart, addItem}}>
                {children}
            </CartContext.Provider>
        )
 }
