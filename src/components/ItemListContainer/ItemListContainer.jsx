import { useState } from "react";
import { Productos, categorias } from "../Productos/Productos";
import Item from "../Item/Item"
import "./styles/ItemListContainer.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ItemListContainer = () => {
   const [item,setItem] = useState(Productos);
   const { id } = useParams()

   const FilterCategory = new Promise((resolve,eject)=>{
    const newProductos = Productos.filter((p)=>p.category == id)
    resolve(newProductos)
   })


   useEffect(()=>{
    FilterCategory.then((response)=>{
        setItem(response)
    })
   },[id])
   return(
    <div className="'ItemListContainer">
        {
            item && item.map((producto)=>{
                return <Item producto={producto} />
            })
        }
    </div>
   )
}

export default ItemListContainer;