import { useState } from "react"

const ItemCount =({onChangeCount})=>{
    const [value,setValue] = useState(0)

    const handlerAddCount = () =>{
        onChangeCount(value + 1)
        setValue(value + 1)
    }
    const handlerSubtractionCount = () =>{
        setValue(value - 1)
        onChangeCount(value - 1)
    }
    return(
        <div>
            <h4>Agregar item</h4>
            <button onClick={()=>handlerSubtractionCount()}>-</button>
            <button onClick={()=>handlerAddCount()}>+</button>
            <input type="text" value={value} onChange={(e)=> setValue(e.target.value)}/>
    </div>
    )
}
export default ItemCount