import React, { useState } from 'react'

function Login() {


  const [email,setEmail] = useState();
const [password,setPassword]= useState();
const[imgu,setImgu]=useState()


localStorage.setItem("uname","admin");
localStorage.setItem("password","12345");


 function sub(e){

 e.preventDefault()

 let u_name= localStorage.getItem("uname")
 let u_password = localStorage.getItem("password")
 
 email == u_name  || password == u_password ?

 alert("ok Right User")

: alert("Wrong User !!!")
///////////////////////  
console.log(email,password);

 }

 




  return (
  
   <>
<div>

<h1>Login</h1><form onSubmit={sub}>
       email:<input type="text"name="eamil"value={email}  onChange={(e)=>setEmail(e.target.value)}/>
       password:   <input type="text"name="password"value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <input type="file" name="img"onChange={(e)=>setImgu(e.target.files[0])} />
            <button type="submit"name="btn">Submit</button>
            </form>
  </div>
</>
  )
}
export default Login

