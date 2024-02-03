import React from "react";
import './About.css';
import s1 from "./images/s1.jpg";
import s2 from "./images/s2.jpg";
import s3 from "./images/s3.jpg";
function About(){
  const arr=[s1,s2,s3];
  const final=Math.floor(Math.random()*arr.length);
    return(
      <div  className="body_about">
          <link href='https://fonts.googleapis.com/css?family=Aref Ruqaa' rel='stylesheet'></link>
         <div className="cont">
            <h1>ABOUT</h1>
            <p>

            Smart Mill stands as a pinnacle of excellence, delivering premium oils, finely milled rice, and artisanal masalas. Our precision-driven oil extraction ensures top-tier quality, meeting both culinary and nutritional demands. Elevate your dining experience with our meticulously milled rice, preserving natural goodness in every grain. </p>
            <button className="readmore">Read More</button>
         </div>
         <div id="about_img" >
               <img className="aboutsimg" src={arr[final]} alt="ecommerce"/>
          </div>
      </div>
    );
}

export default About;