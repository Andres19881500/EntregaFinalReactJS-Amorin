import { useContext } from "react";
import { CartContext } from "../../Context/CartContext"
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore";
import './CartFinalizarCompra.scss'
import InputsCliente from "../InputsCliente/InputsCliente";

const CartFinalizarCompra = ()=>{
    const { cart, removeItem, clear } = useContext(CartContext);
   
    const order = {
        buyer: {
          name: {inputName},
          phone: {address},
          email: {email},
        },
        items: [{cart}],
        total: 250,
      };

    const sendOrder = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection,order).then(({id})=> alert(id))
      };
      
    return (
        <div className="contenedor-general-cart">  
            <h1>Finaliza tu compra</h1>   
            <div className="input-comprador-carrito">
                <InputsCliente inputName={inputName} email={email} phone={phone} />
            </div>
            {cart.map((producto) => {
                return(
                    <div className="productos-cart">
                        <img src={producto.img} height={80} />
                        <p>Nombre producto: {producto.name}</p>
                        <p>Precio: ${producto.price}</p>
                        <p>Cantidad: {producto.count}</p>
                        <button className="boton-vaciar" onClick={()=>removeItem(producto.id)}>Eliminar</button>
                    </div>
                );
            })}
            <div>
                <p>Importe total: ${} </p>
                <button className="boton" onClick={()=>sendOrder()}>Realizar Compra</button>
                <button className="boton-vaciar" onClick={()=>clear()}>Vaciar Carrito</button>
            </div>
        </div>
  
    )
}

export default CartFinalizarCompra