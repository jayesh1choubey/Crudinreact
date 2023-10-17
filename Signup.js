import React, { useContext, useState } from 'react'
import axios from 'axios';
import apnaContext from './Tlist';
 function Signup() {
  
  const [name,setName]= useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword]= useState("");
  const [person,setPerson]= useState({firstName:'', lastName:'', age:''});
  const [image,setImage]= useState("");
 
    const newCOntext =  useContext(apnaContext);

console.log(newCOntext)
  // setPerson({firstName:name,lastName:email,age:password})
const data={
fname:name,
email:email,
password:password,
image:image

}
console.log(data)
function Submit(e)
{
 e.preventDefault();
 
//  curl -X 'POST' ,
//  'https://reqres.in/api/register' ,
//  -H 'accept: application/json' ,
//  -H 'Content-Type: application/json' ,
//  -d '{
//  username: "jayesh",
//  "email": "jchoubey703@gmail.com",
//  "password": "12345"
// }'






 fetch('http://localhost:3000/posts',{

 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({name:data.fname,
  email:data.email ,
  password:data.password ,
    image:data.image,
    otp:"5678"
   /* other product data */
 })
 })
 .then(res => res.json())
.then(console.log);

  alert(data)
  console.log("gjhkgb");
  // console.log(...person.firstName,password);
}

axios.get('http://localhost:3000/posts').then(res =>{
  
  console.log(res)})
  console.log(image)

  function call(e)
  {
console.log(e.target)
  }
  return (

    <>

      insert
<form onSubmit={Submit}>

Name:-<input type="text"name={newCOntext}onChange={(e)=>call(e)}/>
email:<input type="email"name="email"value={email}  onChange={(e)=>setEmail(e.target.value)}/>
password:   <input type="text"name="password"value={password} onChange={(e)=>setPassword(e.target.value)}/>
<input type="file"onChange={(event)=>setImage(event.target.files[0])}/>
           <button type="submit"name="btn">Submit</button>
</form>



          </>
  )
}

export default Signup