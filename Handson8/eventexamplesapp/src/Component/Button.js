import React, { useState } from 'react';

const Button = ()=>{

    const[count,setCount]=useState(0);
    const sayhello = (name)=>{
      //  return(alert(`${name}`))
    };
    // const saywelcome=(welcome)=>{
    //     return (alert(`${welcome}`))
    // };
    const CustomButton=({onpress})=>{
        return(
            <button type = "button" onClick={onpress}>Click on me</button>
        );
        
    }
    const handleevent =()=>{
      alert("I was clicked");
    }


    return(
        <div>
           <p> {count}</p>
            <button onClick={()=>{sayhello("Hello");setCount(count+1)}}>Increment</button><br/>
            <button onClick={()=>{setCount(count-1)}}>decrement</button><br />
            <button value="Welcome" onClick={(e)=>alert(e.target.value)}>SayWelcome</button><br />
            <CustomButton onpress={handleevent} />

        </div>
    )
}
export default Button;