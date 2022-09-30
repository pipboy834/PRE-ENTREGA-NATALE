import React from "react";
import "../ItemDetail/ItemDetail.css"
import ItemCount from "../ItemCount"
import { useState } from "react";
import { Link } from "react-router-dom";


 export const ItemDetail =({data}) =>{
    const [GoToCart, SetGoToCart] =useState(false)

    const onAdd = (quantity) =>{
        SetGoToCart(true)
  
     }
    return(
        <div className="container">
            <div className="detail">
                <img className="detail__image" src={data.image} />
                <div className="content">
                  <h1>{data.titulo}</h1>
                    {
                        GoToCart
                        ? <Link to="/Cart">terminar compra</Link>
                        : <ItemCount initial={1} stock={5}onAdd={onAdd}/>
                    }
                </div>
            </div>
        </div>
    );
 }

 export default ItemDetail