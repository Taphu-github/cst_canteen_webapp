
import { useState } from "react";
import Buy from "../components/Buydaily";
import { Link, useHistory } from "react-router-dom";
const Cards=({products})=>{
    
    return(
        <div className="card" style={{width:300 , height:420, margin:10}}>
            <img className="card-imh-top" src={products.url} style={{width:300, height:200}}/>
            <div className="card-body">
                <h5 className="card-title">{products.name}</h5>
                <p className="card-text">{products.price}</p>
                <p className="card-text">{products.availability}</p>
                <p className="card-text">{products.canteenname}</p>
                <Link to={`/buygrocery/${products.id}`}><button className="btn btn-primary" >Buy</button></Link>
                
            </div>
        </div>
    )
}
export default Cards;