import React from 'react'
import { useState } from 'react';
 import {Multiselect }from 'multiselect-react-dropdown'
export default function Product() {

const [image,setImage]= useState("");
const [optionvalue,setOptionValue] = useState("Course")
console.log(optionvalue);

const eventsend=(event)=>
{
   const file = event.target.files[0]
   console.log(file.name) 
   setImage(event.target.files[0])
   console.log("fb",  image) 
}
const optionhandle=(e)=>
{
setOptionValue(e.target.value)
console.log(optionvalue)
}
const obj =[
  {
    id:1,name:"bca"
  },
  {
    id:2,name:"bba"
  },
  {
    id:3,name:"b.tech"
  },
  {
    id:4,name:"be"
  },
  {
    id:5,name:"bsc"
  }
];
console.log(obj[0].id)

  return (
 <>{
 image ? (
 <img src={URL.createObjectURL(image)} alt=" " width="500" height="600"/>)
 :( "not image selected")
 }
<input type='file'onChange={eventsend}/>

<label>

What do we eat?
{/* <select value={optionvalue} onChange={(e)=>optionhandle(e)}>  // only fun call not given any peramiter
{
obj && obj.map((option)=>(
  <option value={option.id}>{option.name}</option>
))
} */}

<Multiselect options={obj} displayValue={"name"}/>
</label>


    </>
  
  )

// const options = [

//   { label: 'Fruit', value: 'fruit' },

//   { label: 'Vegetable', value: 'vegetable' },

//   { label: 'Meat', value: 'meat' },

// ];

// const [value, setValue] = React.useState();

// const handleChange = (event) => {

//   setValue(event.target.value);

// };
// <Multiselect options={options} displayValue={"label"}/>

// return (

//   <div>

//     <label>

//       What do we eat?

//       <select value={value} onChange={handleChange}>

//         {options.map((option) => (

//           <option value={option.value}>{option.label}</option>

//         ))}

//       </select>

//     </label>

//     <p>We eat {value}!</p>
//     .

   

//   </div> 

// );


}
