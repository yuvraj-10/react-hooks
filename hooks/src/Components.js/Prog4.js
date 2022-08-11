import React from 'react'
import { useState } from 'react';

function Prog4() {
    let [data, setData] = useState({
        age: 20,
    }
    );

   // console.log(data);

    
    let changeAge = () => {
        setData((prev) => {
            return { ...prev, age :data.age+1 }
        });
    }
    let changenum = () => {
        setData((prev) => {
            return { ...prev, age :data.age-1 }
        });
    }
    let reset = () => {
        setData((prev) => {
            return { ...prev, age : 0}
        });
    }

    
    return (<>
        <div>
        Count value is: {data.age}<br></br>
        <button onClick={reset}>Reset</button>
        <button onClick={changeAge}>Plus(+)</button>
        <button onClick={changenum}>Minus(-)</button><br></br>
        </div>
    </>
    )
}

export default Prog4