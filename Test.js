import React from 'react'
import { createContext,useState } from 'react';
import Signup from './Signup';
import Context from './Context';
const Mycontext  = createContext();
 function Test() {
    const [test,setTest]= useState("ntext")
  return (
    <div>
     {/* <Mycontext.Provider value={test}>
<Context/>
</Mycontext.Provider> */}
    </div>
  );
}
export default Test;
// export {Mycontext};