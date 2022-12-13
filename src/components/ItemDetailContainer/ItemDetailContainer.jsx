import ItemDetail from "../ItemDetail/ItemDetail"
import { useState } from "react";
import { Productos, categorias } from "../Productos/Productos";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ItemDetailtContainer = () => {
   const [ItemDetail,setItemDetail] = useState(Productos);
   const { id } = useParams()

   const FilterProduct = new Promise((resolve,eject)=>{
    const newProduct = Productos.filter((p)=>p.id == id)
    resolve(newProduct)
   })


   useEffect(()=>{
    FilterProduct.then((response)=>{
        setItemDetail(response)
    })
   },[id])
   return(
    <div>
        {
            ItemDetail && ItemDetail.map((producto)=>{
                return <ItemDetail producto={producto} />
            })
        }
    </div>
   )
}

export default ItemDetailtContainer;