import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react';
import Update from './Delete';
// import Table from 'react-bootstrap/Table';
export default function Edit() {

    // let  {id} = useParams();

const [data,setData] = useState()
const [id,setId]= useState("");
const [name,setName]= useState("");
const [email,setEmail] = useState("");
const [password,setPassword]= useState("");


  function fetchiddatat()
  {
  axios.get('http://localhost:3000/posts').then(res =>{
    console.log(res.data)
  setData(res.data)

    })
  }

  // useEffect(()=>
  // {
  //   fetchiddatat()
  // },[])

function getlocaldata()
{
  setId(localStorage.getItem("id"));
setName(localStorage.getItem("namee"));
setEmail(localStorage.getItem("emaile"));
setPassword(localStorage.getItem("Passworde"));
console.log(name,email)
}
useEffect(()=>
{
  getlocaldata();

},[])
function Update()
{
  // fetch('http://localhost:3000/posts/'+id,{
  //   method: 'PUT',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({name:name,
  //    email:email ,
  //    password:password ,
  //    otp:"5678" 
  //     /* other product data */
  //   })
  //   })
  //   .then(res => res.json())
  //  .then(console.log);
   
   

  // fetch(`http://localhost:3000/posts/7`,{
  //   method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({  name:name,
  //   email:email,
  //   password:password})
  // })
  // alert("update");

  // code Han_ON

fetch(`http://localhost:3000/posts/`+id,{
  method:'PUT',
  headers: {'Content-Type':'application/json'},
  body: JSON.stringify({name:name,
  email:email,
password:password}),

} 
)


getUrlchange()
}

const  getUrlchange = async()=>
{
 window.location.reload('http://localhost:3001/Tlist')
}
  return (


  //  data && data.map(nval => nval.id ==id ?   (  
  
    <form onSubmit={Update}>
    Name:-<input type="text"name="name"value={name}onChange={(e)=>setName(e.target.value)}/>
    email:<input type="text"name="email"value={email}  onChange={(e)=>setEmail(e.target.value)}/>
    password:   <input type="text"name="password"value={password}onChange={(e)=>setPassword(e.target.value)}/>
    <button type="submit"name="btn">Submit</button>
    </form>


// )  : 
// (<>

// </>)
// )


)
  }


