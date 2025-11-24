import { useState } from 'react'
import {Route, RouterProvider , createBrowserRouter , createRoutesFromElements} from 'react-router-dom'

import Outlet from './components/outline.jsx'
import Home from './components/home.jsx'
import Error from './components/error.jsx'
import Posts from './components/posts.jsx'
import Post from './components/post.jsx'
import Contact from './components/contact.jsx'
import About from './components/about.jsx'
import Reg from './components/reg.jsx'
import ProvReg from './components/provReg.jsx'
import CreatePost from './components/createPost.jsx'

import {action} from './components/post.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<Outlet/>} errorElement={<Error/>}>
        <Route index element={<Home/>}/>
        <Route path='/posts' element={
          <ProvReg>
            <Posts/>
          </ProvReg>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/posts/:id' element={<Post/>} loader={action}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/post/create' element={<CreatePost/>}/>
    </Route>
    <Route path='/reg' element={<Reg/>}/>
  </>
))

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
