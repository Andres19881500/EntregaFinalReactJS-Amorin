import React from "react";
import "./styles/CartWidget.scss"
import cart from "../../images/cart.svg"

const CartWidget = () => {
    return (
        <div className="sectionCarrito">
            <div className="contadorCarrito">
                <p>4</p>
            </div>
            <a href="">
                <img src={cart} alt="carrito de compras" className="logoCarrito"/>
            </a>
        </div>
    )
}

export default CartWidget