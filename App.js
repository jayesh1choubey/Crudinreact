import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext,useState } from 'react';


import Login from './login'
import Signup from './Signup';
import Tlist from './Tlist';
import Edit from './Edit';
import Delete from './Delete';
import Product from './Product';
import Context from './Context';
import Test from './Test';
// const mycontext  = createContext();


function App() {
  const [test,setTest]= useState("fedwfrwet")
  return (
    <>
   
  <Router>
  <Navbar/>
 
  <h1>Routing</h1>
    <Routes>
      <Route path='/Login'element={<Login/>}/>
      <Route path='/Signup'element={<Signup/>}/> ///this data not show compo. name small ya cap later alg-alg
      <Route path='/Tlist'element={<Tlist/>}/>
      {/* <Route path='/Edit/:id'element={<Edit/>}/> */}
      <Route path='/Edit'element={<Edit/>}/>
      <Route path="/Delete"element={<Delete/>}/>
      <Route path="/Product"element={<Product/>}/>
      <Route path="/Context"element={<Context/>}/>
      <Route path="/Test"element={<Test/>}/>
    </Routes>
  </Router>

      
  </>
   
  );
}

export default App;
