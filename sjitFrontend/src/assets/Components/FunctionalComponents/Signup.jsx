import React , {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup =()=> {
  const[firstName, setfirstName]=useState("")
  const[lastName, setlastName]=useState("")
  const[email, setemail]=useState("")
  const[password, setpassword]=useState("")
  const[confirmPassword, setconfirmPassword]=useState("")
  const[phonenumber, setphonenumber]=useState(0)
  const handleSignup=(e)=>{
    
    axios.post("http://localhost:3001/signup",{
      firfirstName:firstName,
      lastName:lastName,
      email:email,
      password:password,
      phoneNumber:phonenumber
    })
  }
  return (
    <div>
      <h1>Signup Page</h1>
      <form>
        <label htmlFor="name">First Name:</label>
        <input type="text" id="uname" value={firstName} onChange={(e)=>setfirstName(e.target.value)} required /><br />
        <label htmlFor="name">Last Name:</label>
        <input type="text" id="name" value={lastName} onChange={(e)=>setlastName(e.target.value)} required /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e)=>setemail(e.target.value)} required /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e)=>setpassword(e.target.value)} required /><br />
        <label htmlFor="confirmpassword">Re-enter Password:</label>
        <input type="password" id="password" value={confirmPassword} onChange={(e)=>setconfirmPassword(e.target.value)} required /><br />
        <label htmlFor="phonenumber">Phone Number:</label>
        <input type="tel" name="phonenumber" id="phonenumber" value={phonenumber} onChange={(e)=>setphonenumber(e.target.value)} required/> <br />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account?<Link to='/login'>Login</Link></p>
    </div>
  );
}
export default Signup;