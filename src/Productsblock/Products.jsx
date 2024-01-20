import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import './Products.css';
import left from "./images/left.png";
import right from "./images/right.png";
import c1 from "./images/c1.jpg";
import c2 from "./images/c2.jpg";

import m22 from "./images/m22.jpg";
import m33 from "./images/m33.jpg"

import r2 from "./images/r2.jpg"
import r3 from "./images/r3.jpeg"

import AOS from 'aos';
import 'aos/dist/aos.css';
let b1=-1,b2=-1,b3=-1;
let bb1=-1,bb2=-1,bb3=-1;
let bbb1=-1,bbb2=-1,bbb3=-1;
function Products(props){
     
     const a=props.img[1];
     const aa=props.img[2];
     const aaa=props.img[3];
     const arr1=[c1,c2,a];
     const arr1_name=["COCONUT OIL","AVOCADO OIL",aa];
     const arr1c1="Coconut oil is high in saturated fats and should be treated like any other fat or oil. While it can be part of a nutritious diet, it's best to stick to two tablespoons (28 grams) or less per day";
     const arr1c2="Avocado oil is oil pressed from the avocado fruit. Its mild taste and high smoke point make it a popular cooking oil, but you can also consume it raw. Avocado oil is very similar to olive oil in terms of utility and nutritional value. Like extra virgin olive oil, cold-pressed avocado oil is unrefined and retains some of the flavor and color of the fruit, leaving it greenish in color.";
     const arr1_cont=[arr1c1,arr1c2,aaa];
     const arr2=[m22,m33,a];
     const arr2_name=["TANDOORI MASALA","CHAAT MASALA",aa];
     const arr2c1="It has antibacterial,antifungal and antimicrobial properties. Its health benefits include boosting brain function, blood purification,blood circulation,pain relief, fighting diabetes and infections and protection against heart diseases helps rapid healing."
     const arr2c2="The vitamins A and C found in dried red hot chilli peppers are beneficial for the eyes and immunity, respectively. Asafoetida is a source of niacin and riboflavin B vitamins, although cumin also contains vitamin A. And lastly, coriander is a modest but important source of vitamin C.";
     const arr2_cont=[arr2c1,arr2c2,aaa];
     const arr3=[r2,r3,a];
     const arr3_name=["BASMATHI RICE","BOMBA RICE",aa];
     const arr3c1="Basmati rice is a staple in the Indian diet. This rice is grown in India's desert regions, making it a good source of nutritive minerals like iron, zinc, and calcium. It's also high in dietary fiber and has a low glycemic index. This makes it an ideal grain to have in your meal plan following a healthy diet."
     const arr3c2="It is a type of grain that absorbs both heat and liquid very well. That is why it expands and is much looser, preserves the flavor of the broth and does not break or overcook once the cooking time is over.";
     const arr3_cont=[arr3c1,arr3c2,aaa];
     const [val,changeVal]=useState(a);
     const[name,changeName]=useState(aa);
     const[cont,changeCont]=useState(aaa);
     const[suspense,changeSuspense]=useState("");
     function change(){
          if(props.img[0]==1){
               if(b1==2){b1=-1; bb1=-1; bbb1=-1;}
          changeVal(arr1[++b1]);
          changeName(arr1_name[++bb1]);
          changeCont(arr1_cont[++bbb1]);
          }
          if(props.img[0]==2){
               if(b2==2){b2=-1; bb2=-1; bbb2=-1}
               changeVal(arr2[++b2]);
               changeName(arr2_name[++bb2]);
               changeCont(arr2_cont[++bbb2]);
              
          }
          if(props.img[0]==3){
               if(b3==2){b3=-1; bb3=-1; bbb3=-1}
               changeVal(arr3[++b3]);
               changeName(arr3_name[++bb3]);
               changeCont(arr3_cont[++bbb3]);
               
           }
     }
     function back(){
          if(props.img[0]==1){
               if(b1==-1){b1=3; bb1=3; bbb1=3}
               if(b1==0){b1=3; bb1=3; bbb1=3}
               changeVal(arr1[--b1]);
               changeName(arr1_name[--bb1]);
               changeCont(arr1_cont[--bbb1]);
             
               }
               if(props.img[0]==2){
                    if(b2==-1){b2=3; bb2=3; bbb2=3}
                    if(b2==0){b2=3; bb2=3; bbb2=3}
                    changeVal(arr2[--b2]);
                    changeName(arr2_name[--bb2]);
                    changeCont(arr2_cont[--bbb2]);
                    
               }
               if(props.img[0]==3){
                    if(b3==-1){b3=3; bb3=3; bbb3=3;}
                    if(b3==0){b3=3; bb3=3; bbb3=3;}   
                    changeVal(arr3[--b3]);
                    changeName(arr3_name[--bb3]);
                    changeCont(arr3_cont[--bbb3]);
                   
                }
     }
   
     useEffect(() => {
          AOS.init();
        }, [])
     return(
          <div  data-aos="fade-up" className="block_pro">
        <link href='https://fonts.googleapis.com/css?family=Amiko' rel='stylesheet'></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"></link>
        <link href='https://fonts.googleapis.com/css?family=Bayon' rel='stylesheet'></link>
                    <div className="inner_block">
                         <div className="image_sizer">
                              <img   id="prod_img"  src={val} alt="ecommerce"/>
                              <div className="overlying">
                                       <div className="text">
                                        <h3 className="benefits">Benefits</h3>
                                        <p className="contentss">{cont}</p>
                                        </div>
                              </div>    
                         </div> <br/>
                        <div className="name_Class">{name}</div><br/>
                        <Link target="_self" to="/Order"> <button  className="butt">ORDER</button></Link><br/>
                        <p>{suspense}</p>
                          <button className="butten_pro" onClick={back}><img className="mover" src={left} alt="left"/></button>
                          <button className="butten_pro" onClick={change}><img className="mover" src={right} alt="right"/></button>
                    </div>    
          </div>
     );
}

export default Products;