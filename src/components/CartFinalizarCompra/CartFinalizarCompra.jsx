import { useContext } from "react";
import { CartContext } from "../../Context/CartContext"
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore";
import './ProductosCart.scss'


const CartFinalizarCompra = ()=>{
    const { cart } = useContext(CartContext);

    const order = {
        buyer: {
          name: "pablo",
          phone: "2222",
          email: "prueba@coder.com",
        },
        items: [{cart}],
        total: 1,
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
                <div>
                    <label>Nombre</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Dirección</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Correo Electronico</label>
                    <input type="text" />
                </div>
            </div>
            {cart.map((producto) => {
                return(
                    <div className="productos-cart">
                        <img src={producto.img} height={80} />
                        <p>Nombre producto: {producto.name}</p>
                        <p>Precio: ${producto.price}</p>
                        <p>Cantidad: {producto.count}</p>
                        <button>Eliminar</button>
                    </div>
                );
            })}
            <div>
                <p>Importe total: ${} </p>
                <button onClick={()=>sendOrder()}>Realizar Compra</button>
                <button>Vaciar Carrito</button>
            </div>
        </div>
  
    )
}

export default CartFinalizarCompra