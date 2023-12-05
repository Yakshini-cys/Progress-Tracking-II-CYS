import React from 'react'
import Home from '../login/Home'
import Sign from '../login/Sign'
import Signup from '../login/Signup'
import Blog from '../login/Home Pages/Blogs'
import Layout from '../login/Home Pages/Layout'
import Contact from '../login/Home Pages/Contact'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
//<Route index element={<Sign/>}/>
const Navigate=()=>{
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Sign/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/layout" element={<Layout/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
    );
}
export default Navigate;