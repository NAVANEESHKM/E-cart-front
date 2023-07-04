import React from "react";
import "./Thank.css";
function Thank(){
    const image=require("./thank.png");
    return(
  <div className="thank_block">
       
       <img className="thank_img" src={image} alt="thank"/>

  </div>
    );
}

export default Thank;