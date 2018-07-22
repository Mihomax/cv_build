import React from 'react';
import './Left.css';
import me from '../../images/me.jpg'




const left = ( props ) => {

const labelStyle = {fontWeight:"lighter", color:"#9e9e9e"}
        return (
        <div className = "left">
        
                <img class="myphoto"alt="MyPhoto"src ={me} />
                
           <div className = "contact">
           <p className = "name">Hi, I am Hovhannes.<br/> Welcome to my <br/>ineractive profile !</p>
                <p className="tel"><span style={labelStyle}>Tel: </span>438-825-1410  </p> 
                <p className="email"><span style={labelStyle}>E-mail: </span><br />h.hambardzumyan@gmail.com </p> 
                <p> <span style={labelStyle}>LinkedIn:</span><br />linkedin.com/in/hhambardzumyan/</p><br />
                
                <button id="positiveBtn" onClick = {props.button}>Positive button</button>
           </div>
        </div>);
}
export default left;