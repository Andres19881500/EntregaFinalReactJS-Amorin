import "./ItemDetail.scss"
const ItemDetail =({producto})=>{
    
    return(
        <div className="Item-detail--area">
            <h1>{producto.name}</h1>
            <img src={producto.img} width={500}/>
            <p>{`Precio U$D ${producto.price}`}</p>
        </div>
    )
}
export default ItemDetail;