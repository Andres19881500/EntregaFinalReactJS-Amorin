import { useState } from "react"

const ItemCount =({onChangeCount})=>{
    const [value,setValue] = useState(0)

    const handlerAddCount = () =>{
        if(value<5){
        setValue(value + 1)
        }
    }
    const handlerSubtractionCount = () =>{
        if(value>=1){
        setValue(value - 1)
        }
        
    }
    return(
        <div>
            <h4>Agregar item</h4>
            <button onClick={()=>handlerSubtractionCount()}>-</button>
            <button onClick={()=>handlerAddCount()}>+</button>
            <div>{value}</div>
            <button onClick={()=>onChangeCount(value)}>Agregar carrito</button>
    </div>
    )
}
export default ItemCount