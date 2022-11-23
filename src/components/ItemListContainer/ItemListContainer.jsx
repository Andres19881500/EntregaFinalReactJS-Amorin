import React from "react";
import "./styles/ItemListContainer.scss";

const ItemListContainer = (prop) => {
    return (
        <div className="itemListContainer">¡Hola {prop.name}, aquí encontraras la mayor variedad de capsulas y maquinas de cafe en Uruguay!</div>
    )
}

export default ItemListContainer