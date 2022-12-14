import ItemDetail from "../ItemDetail/ItemDetail"
import { useState } from "react";
import { Productos} from "../Productos/Productos";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ItemDetailtContainer = () => {
   const [itemDetail,setitemDetail] = useState({});
   const { id } = useParams()

   const oneProduct = new Promise((resolve)=>{
    const newProduct = Productos.find((p)=>p.id === parseInt(id) )
    resolve(newProduct)
   })


   useEffect(()=>{
    oneProduct.then((response)=>{
        setitemDetail(response)
    })
   },[id])
   
   return(
    <div>
        <ItemDetail producto={itemDetail}/>
    </div>
   )
}

export default ItemDetailtContainer