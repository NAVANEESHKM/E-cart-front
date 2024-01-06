import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link as DomLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
function Menu(props){
    let Navigate = useNavigate(); 

    function logout(){
        localStorage.removeItem("Email")
        localStorage.removeItem("Password")
           Navigate('/')
    }
    useEffect(() => {
        AOS.init();
      }, [])
    return (

        <div className="menu_body">
            <h3 data-aos="fade-right" className="logo" >SMART MILLS </h3>
            <Link  to="aboutid" spy={true} smooth={true} offset={-70} duration={500}><p data-aos="fade-right" className="menu_ele">ABOUT</p></Link>
            <Link  to="productid" spy={true} smooth={true} offset={-30} duration={500}><p data-aos="fade-right" className="menu_ele">PRODUCTS</p></Link>
            <Link  to="reviewid" spy={true} smooth={true} offset={-70} duration={500}><p data-aos="fade-left" className="menu_ele">REVIEWS</p></Link>
            <Link  to="" spy={true} smooth={true} offset={-70} duration={500}> <p data-aos="fade-left" className="menu_ele">AWARDS</p></Link>
            <Link  to="" spy={true} smooth={true} offset={-70} duration={500}><p onClick={logout} data-aos="fade-left" className="menu_ele">LOGOUT</p></Link>
            <DomLink title="view orders" data-aos="fade-left" to="/details"> <img data-aos="fade-right" className="menu_ele1" src={require("./images/cart_icon.png")}/></DomLink>
            
        </div>
    );
}

export default Menu;