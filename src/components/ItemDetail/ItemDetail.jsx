import { useContext } from "react";
import "./ItemDetail.scss"
import { CartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ producto }) => {
    const { addCount } = useContext(CartContext);
  
    const handlerAddCount = (count) => {
      addCount(count, producto);
    };
    return(
        <div className="Item-detail--area">
            <h1>{producto.name}</h1>
            <img src={producto.img} width={400}/>
            <p>{`Precio U$D ${producto.price}`}</p>
            <ItemCount onChangeCount={(e) => handlerAddCount(e)} />
        </div>
    )
}
export default ItemDetail;