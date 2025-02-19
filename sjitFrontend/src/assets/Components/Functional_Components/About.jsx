import React, { useState } from 'react';

const About = () => {
    const initial=0;
    const [num, setNum]= useState(initial);
    return(
        <div>
            <h1>About</h1>
            <p>This is the inital value {initial}</p>
            <button onClick={()=>setNum(num+1)}>+</button>
            <p>Updating State {num}</p>
            <button onClick={()=>setNum(num-1)}>-</button>
            <button onClick={()=>setNum(0)}>Reset</button>
        </div>
    )
}

export default About