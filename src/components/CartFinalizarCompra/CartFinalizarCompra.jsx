import { useContext } from 'react';
import { useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
  writeBatch,
} from 'firebase/firestore';
import './CartFinalizarCompra.scss';
import InputsCliente from '../InputsCliente/InputsCliente';

const CartFinalizarCompra = () => {
  const { cart, removeItem, clear } = useContext(CartContext);
  const [inputName, setInputName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const order = {
    buyer: {
      name:  inputName ,
      phone: address ,
      email: email ,
    },
    items: [{ cart }],
    total: 250,
  };

  const sendOrder = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order).then(({ id }) => alert(id));
  };

  const calcImporteTotal = cart.reduce((total, item) => {
    return total + item.count*item.price
  }, 0)

  const importeTotal = calcImporteTotal
  console.log(importeTotal);
  
  return (
    <div className="contenedor-general-cart">
      <h1>Finaliza tu compra</h1>
      <div className="input-comprador-carrito">
        <InputsCliente
          inputName={inputName}
          email={email}
          address={address}
          setInputName={setInputName}
          setEmail={setEmail}
          setAddress={setAddress}
        />
      </div>
      {cart.map((producto) => {
        return (
          <div className="productos-cart">
            <img src={producto.img} height={80} />
            <p>Nombre producto: {producto.name}</p>
            <p>Precio: ${producto.price}</p>
            <p>Cantidad: {producto.count}</p>
            <button
              className="boton-vaciar"
              onClick={() => removeItem(producto.id)}
            >
              Eliminar
            </button>
          </div>
        );
      })}
      <div>
        <p>Importe total: ${importeTotal} </p>
        <button className="boton" onClick={() => sendOrder()}>
          Realizar Compra
        </button>
        <button className="boton-vaciar" onClick={() => clear()}>
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
};

export default CartFinalizarCompra;