import React from 'react'
import { useState } from 'react';

function Prog3() {
    let [data, setData] = useState({
        age: 20,
        siblings: 1
    }
    );

   // console.log(data);

    
    let changeAge = () => {
        setData((prev) => {
            return { ...prev, age :data.age+1 }
        });
    }
    

    let changeSiblings = () => {
        setData((prev) => {
            return { ...prev, siblings : data.siblings+1 }
        });
    }
    
    return (<>
        <div>This is done using state object<br></br>
        Today I am {data.age} years of Age.<br></br>
        I have {data.siblings} Siblings.<br></br>
        <button onClick={changeAge}>Getting Older!</button>
        <button onClick={changeSiblings}>More Siblings</button><br></br>
        </div>
    </>
    )
}

export default Prog3