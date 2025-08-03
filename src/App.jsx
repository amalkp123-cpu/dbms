import React from 'react'
import Form from './Form'
import { Routes,Route } from 'react-router'
import Home from './Home'
import './App.css'





const App = () => {
 
 
  return(
    
    <div >
       
      
     <Routes>
      <Route path="/" element={<Home></Home>}>  </Route>
      <Route path="/booking" element={<Form></Form>}></Route>
      <Route path="/" element={<Home></Home>}></Route>
     
    
     </Routes>
      
       
    
   
    </div>
  )
}

export default App
