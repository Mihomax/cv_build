import React from 'react';
import './Education.css';
import ahuntsic from '../../../images/ahuntsic.png';
import seua from '../../../images/seua.png';



const education = () => (
<div >
        <h1>I have engineering background and recent IT update !</h1><br /><br />
        <div className = "main educ">
        <img className="logos big" src={ahuntsic} alt='Ahuntsic College' />

        <h3 className = "lastline">AEC - Web Development<span className ="date">2018</span> </h3>
        
        
        <br /> 
        </div> 
        
        <div className = "main final educ">
        <img className="logos big" src={seua} alt='SEUA' />
        <h3>Master of Science - Mechanical Engineering<span className ="date ">2008</span> </h3>
               
        <br /> 
        </div> 
</div>
);
export default education;

