import React from 'react'
import { useState } from 'react';

function Prog12(props) {
  //We can change the value of the variable without states but that will not change
  // the value of the variable in display but will change the value in code only.
  //as use state returns an array we always use [0] // react hooks concept
  let [Siblings,setSiblings] = useState(props.Siblings);
  let [Age,setAge] = useState(props.Age);
  // This line can also be a string.This abc is initialization  of variable
  // value change happens inside the function.
  //console.log(Siblings);


  let changeSiblings = () =>{
    setSiblings((prev1) => {
        return ( prev1 += 1);
    });
  }
  let changeAge = () =>{
    setAge((prev) => {
        return ( prev += 1);
    });
  }
  return (<>
    <div>Today I am {Age} years of Age.</div>
    <div>I have {Siblings} Siblings.</div>
    <button onClick={changeAge}>Getting Older!</button>
    <button onClick={changeSiblings}>More Siblings</button>
    </>
  )
}

export default Prog12