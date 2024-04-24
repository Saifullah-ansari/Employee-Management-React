

import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import CreateUser from './Components/CreateUser'
import Edituser from './Components/Edituser'
import HomeCrud from './Components/HomeCrud'
import Users from "./Components/Users"

const App=()=> {
  return (
    <div>
      <BrowserRouter>
           <HomeCrud/>
           <Routes>
           

            <Route path="/create" element={<CreateUser/>}></Route>
            <Route path="/user" element={<Users/>}></Route>
            <Route path="/edit/:index" element={<Edituser/>}></Route>
           </Routes>
         </BrowserRouter>
         {/* <h1>hellooooonpm </h1> */}
      
    </div>
  )
}

export default App




//npm run dev 