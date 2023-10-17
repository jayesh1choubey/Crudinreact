import React from 'react'
import { useContext } from 'react';
import Mycontext from './Test';

function Context() {
   const user =  useContext(Mycontext);
  //  console.log(user+test)

  return (
    <div>
    <Mycontext.Consumer>
    {(test) =><h1>de {test} </h1>}
    </Mycontext.Consumer>
      
    </div>
  )
}
export default Context;