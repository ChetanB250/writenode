import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import CreatePost from '../pages/CreatePost'
import PageNotFound from '../pages/PageNotFound'
import ProtectedRoutes from './ProtectedRoutes'

const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='create' element={<ProtectedRoutes><CreatePost/></ProtectedRoutes>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </main>
  )
}

export default AllRoutes
