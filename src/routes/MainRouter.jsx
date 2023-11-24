import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../pages/Category"
import NavBarComponent from '../components/NavBarComponent/NavBarComponent';
import Category from '../pages/Category';
import Item from "../pages/Item"

const MainRoutes = () => {
  return (
    <Router>
      <NavBarComponent/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/:categoryId' element={<Category />}/>
        <Route path='/Item/:id' element={<Item />}/>
      </Routes>
    </Router>
  );
};

export default MainRoutes;