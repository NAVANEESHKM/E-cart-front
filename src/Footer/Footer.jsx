import React from "react";
import "./Footer.css";
function Footer(){
       return(
        <div className="Footer">
           <link href='https://fonts.googleapis.com/css?family=Chivo Mono' rel='stylesheet'></link>
            <img className="foot_img" src={require("./images/facebook.png")} alt="facebook"/>
            <img className="foot_img" src={require("./images/instagram.png")} alt="instagram"/>
            <img className="foot_img" src={require("./images/twitter.png")} alt="twitter"/>
            <p className="footer_cont">Info . Support . Marketing</p>
            <p className="footer_cont">Terms of Use . Privacy Policy</p>
            
        </div>
       )
}
export default Footer;