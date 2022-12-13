
const ItemDetail =({producto})=>{
    
    return(
        <div>
            <h1>{producto.name}</h1>
            <img src={producto.img}/>
            <p>Precio U$D</p>
        </div>
    )
}
export default ItemDetail;