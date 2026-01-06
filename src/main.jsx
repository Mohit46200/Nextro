import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './contents/layout'
import Home from './contents/home'
import About from './contents/about'



const  router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout></Layout>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>

    </Route>
  )
)




createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
