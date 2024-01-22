import React from "react";
import { Link } from "react-router-dom";
import AddProduct from "../AddProduct/addproduct";

export default function AdminPage(){
    return(
        <>
             <h1>Admin Page</h1>
             <Link target="_self" to="/addproductform"> <button  className="butt">Add Product</button></Link><br/>
             <AddProduct/>
        </>
    )
}