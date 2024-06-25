
import { useState } from "react";
import { Link } from "react-router-dom";
import Buy from "../components/Buydaily";
const FeedbackSolo=({products})=>{


    return(
        <div className="card"  style={{ marginTop:10, textAlign:"center"}}>
            <div className="card-body" style={{border:'1px double'}}>
                <p className="card-text">{products.feedback}</p>
            </div>
        </div>
    )
}
export default FeedbackSolo;