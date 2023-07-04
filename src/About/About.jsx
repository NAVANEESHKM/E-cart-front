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
Driven by High Principled Values, KPR Mill is one of the largest vertically integrated, public limited – listed company with diversified business focus on Oil,Wheet and Masala. KPR has earned a great deal of experience over the last 40 years to produce an indelible mark in the textile landscape.</p>
            <button className="readmore">Read More</button>
         </div>
         <div id="about_img" >
               <img className="aboutsimg" src={arr[final]} alt="ecommerce"/>
          </div>
      </div>
    );
}

export default About;