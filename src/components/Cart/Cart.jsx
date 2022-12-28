import React from "react";
import { useContext } from "react";
import "./styles/CartWidget.scss"
import cart from "../../images/cart.svg"
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const Cart = () => {
    const { count } = useContext(CartContext);
    const {listaProducto} = useContext(CartContext);
    console.log(count);
    console.log(listaProducto);
    return (
        <div className="sectionCarrito">
            <div className="contadorCarrito">
                <p>{count}</p>
            </div>
            <Link to="/Cart">
                <img src={cart} alt="carrito de compras" className="logoCarrito"/>
            </Link>
        </div>
    )
}

export default Cart