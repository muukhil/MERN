import React, {useState, useMemo} from "react";

function slowFunction(num){
    return num*2;
}

const UseMemo = ()=>{
    var [number, setNumber] = useState(0);
    var [theme, setTheme] = useState(false);
    var styling ={
        backgroundColor: theme ? "black": "white",
        color: theme ? "white": "black",
    };
    var doublingUpANumber = useMemo(()=>{
        return slowFunction(number)
    }, [number])
    return (
        <div style={styling}> 
            <button onClick={()=>setTheme(!theme)}>Toggle Theme</button>
            <h1>This is useMemo example</h1>
            <p>Number Box: <input type="number" name="" id="" /></p>
        </div>
    )
}
export default UseMemo;