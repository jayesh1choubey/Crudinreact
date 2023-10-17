import React, { createContext, useEffect } from 'react'
import { useState } from 'react'
  // import Table from 'react-bootstrap/Table';
//  import Button from 'react-bootstrap/Button';
import axios from 'axios';
 import 'bootstrap/dist/css/bootstrap.min.css';

 function Tlist() {


const [Arrid, setArrid] = useState([])
const [userdata,setUserdata] = useState()
// const [image,setImage] = useState("")

function autorefresh ()
{
  window.location.reload('http://localhost:3001/tlist')
}
setTimeout(function(){
  autorefresh()},10000)

function fetchdata()
{
axios.get('http://localhost:3000/posts').then(res => {
  
setUserdata(res.data)
  console.log("res",res.data)
   
  })
 }
 

useEffect(()=>{
  fetchdata()
  
},[])
//  fetchdata()
// console.log(userdata)                   

function edit(id)
{
  
  localStorage.setItem("id",id.id);
  localStorage.setItem("namee",id.name);
localStorage.setItem("emaile",id.email);

localStorage.setItem("Passworde",id.password);

window.location.replace('http://localhost:3001/Edit')
  // alert("edit"+id)
}

function delet(id)
{
setArrid([id]);
alert(Arrid)
const arr=[]

const data={
  nid:Arrid,
}

for(let i=0;i<Arrid.length;i++)
{
  arr[0]= id;
  arr[1]= id;
  // alert(arr[i])
  console.log(...arr)
}

} 

function alldelet()
{
for(let i=0;i<Arrid.length;i++)
{
 const data={

}
//  axios.delete('http://localhost:3000/posts/'+nid).then(res =>{

//   console.log("successfull Delete"+res)
// })
console.log("successfull Delete")
}

}
// const getImage = async()=>
// {
// const response = await axios.get("https://picsum.photos/v2/list")
// const data = response.data;
// console.log("resp.data"+data)

// }

console.log("successfull Delete"+userdata)

  return (

  


  
<table striped bordered hover>
<thead>

<tr>
  <th>Id</th>
  <th>User Name</th>
  <th>Email</th>
  <th>Password</th>
 
  <th>Action</th>
</tr>
</thead>
<tbody>
{
userdata&&  userdata.map(nval=>
<tr>
<td>{nval.id}</td>
  <td>{nval.name}</td>
  <td>{nval.email}</td>
  <td>{nval.password}</td>
  <td> <button variant="primary"onClick={()=>edit(nval)}>Primary</button>{' '}</td>
  <td> <button variant="primary"onClick={()=>delet(nval.id)}>Primary</button>{' '}</td>
 
</tr>

) 
}
  
</tbody>
</table>)
}
export default Tlist