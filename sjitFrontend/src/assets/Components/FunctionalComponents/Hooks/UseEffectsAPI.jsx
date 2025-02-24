import React, {useState, useEffect } from 'react'
import axios from 'axios'
const UseEffectsAPI = ()=>{
    var [post, setPost] = useState([]);
    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            setPost(res.data)
        })
        .catch((err)=> console.log("Couldn't read the API", err));
    },[])
    return (
        <div>
            <h1>This is useEffect example with API call</h1>
            <h2>
                We are fetch data from JSONPlaceHolder and display the data.
            </h2>
            <ol>
                {
                    post.map((post)=>(
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ol>
            <button onClick={()=>{}}>Hello</button>
        </div>
    )
};
export default UseEffectsAPI;