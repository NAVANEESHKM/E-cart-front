import React, { useEffect, useState } from "react";
import "./Feedback.css";
import "./Feedback";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Feedback(props){
   useEffect(() => {
      AOS.init();
    }, [])
    return(
        
       <div data-aos="fade-up" className="feed_block">
           <link href='https://fonts.googleapis.com/css?family=Amiko' rel='stylesheet'></link>
            <link href='https://fonts.googleapis.com/css?family=Calistoga' rel='stylesheet'></link>
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <img className="feed_img" src={require("./images/image_icon.png")}/><br/>
                 <h5 className="class_feedhead">{props.p1.name}</h5>
                <p className="class_feedcont">{props.p1.comment}</p>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                 <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                
       </div>
       
    )
}

export default Feedback;