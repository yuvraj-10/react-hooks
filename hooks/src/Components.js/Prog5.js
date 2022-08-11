import React from 'react'
import { useState, useEffect } from 'react';

function Prog5() {
    let [data, setData] = useState({
        age: 0,
    }
    );

    // console.log(data);

    let reset = () => {
        setData((prev) => {
            return { ...prev, age: data.age + 1 }
        });
    }

    useEffect(() => {
        document.title = 'You are ' + data.age + ' years old';
     })
    return (<>
        <div>
            Look at the title Bar<br></br>
            Count value is: {data.age}<br></br>
            <button onClick={reset}>Change</button>
        </div>
    </>
    )
}

export default Prog5