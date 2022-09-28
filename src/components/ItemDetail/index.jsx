import React from "react";
import "../ItemDetail/ItemDetail.css"




 export const ItemDetail =({data}) =>{
    return(
        <div className="container">
            <div className="detail">
                <img className="detail__image" src={data.image} />
                <div className="content">
                    <h1>{data.titulo}</h1>
                </div>
            </div>
        </div>
    );
 }

 export default ItemDetail