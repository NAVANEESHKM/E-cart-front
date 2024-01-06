import React, { useState,useEffect } from "react";
import Feedback from "../Feedback/Feedback";
import Condition from "../Condition/Condition";

import Footer from "../Footer/Footer";
import "./Helper.css";
const feed1={name:"Vijay",comment:"Every thing is fine . We are so happy to hear that the flavor and crunch were up to par with your expectations."};
  const feed2={name:"Sachin",comment:"It sounds like you enjoyed our friend chicken wings. We are so happy to hear that the flavor and crunch were up to par with your expectations."};
  const feed3={name:"Dhanush",comment:"your products are always good. We are so happy to hear that the flavor and crunch were up to par with your expectations."};
  let per=0;
  
function Helper(){
    let c=0;
    const [Orders1,setOrders1] = useState([]);
   const[val,changeVal]=useState("");
    let[a,changeval]=useState(0);
    let[fc,changefc]=useState(feed1);
    let[fc1,changefc1]=useState(feed2);
    let[fc2,changefc2]=useState(feed3);
    useEffect(()=>{
        const email=localStorage.getItem("Email")
        fetch('http://localhost:3000/api/all/comment',{
        method:'POST',
        headers:{
             'Content-Type':'application/json'
        },
        body:JSON.stringify({email})
    }
        )
            .then(response => response.json())
            .then((jsonData) => {
            // jsonData is parsed json object received from url
                setOrders1(jsonData.comments);
            })
        .catch((error) => {
            // handle your errors here
            console.error(error)
        })
    },[]);
     let result=()=>{
         changeval(1);
         document.getElementById("button_app2").style.display="none";
         
     }
     let cleaner=(a)=>{
        if(a==1){
        document.getElementById("button_app2").style.display="none";
        }
        else if(a==2){
            changeval(0);
            document.getElementById("button_app2").style.display="inline";
        }
     }
     let chance=(val1,c)=>{
        if(c==1){
             console.log(c);
             changefc(val1);
        }
        else if(c==2){
            console.log(c);
            changefc1(val1)
        }
        else if(c==3){
            changefc2(val1);
            
        }
     }
     
     
    return(
        <div className="outer_comm">
             <div id="reviewid" className='product_name'><h3>OUR REVIEWS</h3></div>

              <div className="feed_outer">
               { (Orders1.length==0)?
                <>
                
                     <Feedback p1={fc}/>
                     <Feedback p1={fc1}/>
                     <Feedback p1={fc2}/>
                </>:(Orders1.length==1)?
                      <>
                      <Feedback p1={Orders1[0]}/>
                     <Feedback p1={fc1}/>
                     <Feedback p1={fc2}/>
                </>:(Orders1.length==2)?
                <>
                      <Feedback p1={Orders1[0]}/>
                     <Feedback p1={Orders1[1]}/>
                     <Feedback p1={fc2}/>
                </>:(Orders1.length==3)?
                <>
                     <Feedback p1={Orders1[0]}/>
                     <Feedback p1={Orders1[1]}/>
                     <Feedback p1={Orders1[2]}/>
                </>:(Orders1.length>3)?
                <>
                <Feedback p1={Orders1[Orders1.length-1]}/>
                <Feedback p1={Orders1[Orders1.length-2]}/>
                <Feedback p1={Orders1[Orders1.length-3]}/>
                 </>:2
                }
                
               
              
               </div>
              
               <div id='button_app'>
                    <button  onClick={()=>{result(); cleaner(1);} } id='button_app2'>COMMENT</button>
                </div >
                <Condition fun={cleaner} chance={chance} con={a}  />
        </div>
    )
}
export default Helper;