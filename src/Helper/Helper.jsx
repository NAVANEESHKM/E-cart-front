import React, { useState,useEffect } from "react";
import Feedback from "../Feedback/Feedback";
import Condition from "../Condition/Condition";
import { jwtDecode, InvalidTokenError } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
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
    const [mover,setmover]=useState(0)
    const navigate = useNavigate();
    const token=localStorage.getItem("Token")
    function HelpNavigate(){
        navigate("/");
      }
    useEffect(() => {
        // Function to decode the token and update state
        const decodeToken = () => {
          try {
            const decoded = jwtDecode(token);
            // Check if the token has expired
            const isTokenExpired = decoded.exp * 1000 < Date.now();
      
            if (isTokenExpired) {
              console.log('Token has expired');
              HelpNavigate(); // Call HelpNavigate when the token is expired
            }
          } catch (error) {
            console.error('Error decoding token:', error);
          // HelpNavigate() // Use navigate within the Router scope
          }
        };
      
        // Call the decodeToken function when the component mounts
        decodeToken();
      },[mover]);
    useEffect(()=>{
        const email=localStorage.getItem("Email")
        fetch('https://e-cart-backend-1gs2.onrender.com/api/all/comment',{
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
    },[Orders1]);
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
                    <button  onClick={()=>{result(); cleaner(1); setmover(1); } } id='button_app2'>COMMENT</button>
                </div >
                <Condition fun={cleaner} chance={chance} con={a}  />
        </div>
    )
}
export default Helper;