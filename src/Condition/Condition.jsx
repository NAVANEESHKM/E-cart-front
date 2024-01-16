import React, { useState ,useRef} from "react";

import "./Condition.css";
import "../Helper/Helper.css";
function Condition(props){
     
      const[name,change_new1]=useState("");
      const[comment,change_new2]=useState("");
      let c=useRef(0);
      let coco=[name,comment];
     function counter(){
           c.current=c.current+1;
           if(c.current==4) c.current=1;
           
     }
     function remover(){
           document.getElementById("comment_bloc").style.display="none";
           props.fun(2);
     }
     function handleSubmit(e) {
      e.preventDefault();
     const email=localStorage.getItem("Email")
      // Convert form data to JSON
      const formData = {
        email,
        name,
        comment
      };
      

      // Send JSON data to the server
      fetch('https://e-cart-backend-1gs2.onrender.com/api/comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(response => response.json())
        .then(data => {
          // Handle response from the server
          console.log(data);
        })
        .catch(error => {
          // Handle error
          console.error(error);
        });
      
    };
    if(props.con==1){
     return(
      <div id="comment_bloc" className="condition_bloc">
            
            <link href='https://fonts.googleapis.com/css?family=Calistoga' rel='stylesheet'></link>
             <label className="form_ent" for="fname">Name</label><br/><br/>
             <input id="name_box" 
                    type="text" 
                    name="name"
                    value={name}
                    onChange={e=>change_new1(e.target.value)}
                    
                    ></input><br/><br/>
             <label className="form_ent" for="feed">FeedBack</label><br/><br/>
             <textarea id="desc_box" 
                    type="text" 
                    rows={4}
                    cols={40}
                    name="comment"
                    value={comment}
                    onChange={e=>change_new2(e.target.value)}
                    ></textarea><br></br><br/>
            <button onClick={(e)=>{counter();  props.chance(coco,c.current);  handleSubmit(e); remover();}}  id="button_app3">POST</button>
      </div>
       )
     }
}
export default Condition;