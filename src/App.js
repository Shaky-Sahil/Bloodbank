import React from 'react'
import Donorlist from './components/Donorlist'
import Home from './components/Home'
import Nav from './components/Nav'
import Adddonor from './components/Adddonor'
import Login from './components/Login'
import Signup from './components/Signup'

import Create from './components/Create'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Error from './components/Error'
import Manageuser from './components/Manageuser'
import Request from './components/Request'
import Terms from './components/Terms'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route  path='/' element={<Home />}></Route>
      <Route  path='/Login' element={<Login />}></Route>
      <Route  path='/SignUp' element={<Signup />}></Route>
      <Route path='/dashboard' element={<Donorlist/>}></Route>
      <Route path='/error' element={<Error/>}></Route>
      <Route path='/request' element={<Request/>}></Route>       
      <Route path='/manage/user' element={<Manageuser/>}></Route>   
      <Route path='/admin/addDonor' element={<Adddonor/>}></Route>   
      <Route path='/terms'element={<Terms />}></Route>
      
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App