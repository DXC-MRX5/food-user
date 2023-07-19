import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './mainComponents/Home'
import Searched from './mainComponents/Searched'
import CategoryLoader from './CategoryLoader'
import SavedBoards from './pages/responsivePages/SavedBoards'
import SavedRecipes from './pages/responsivePages/SavedRecipes'
import Profile from './pages/responsivePages/Profile'
import AllCategoriesPage from './pages/responsivePages/AllCategoriesPage'

const Routing = ({onBlur}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Searched/>}/>
        <Route path='/save/recipes' element={<SavedRecipes setBlur={onBlur}/>}/>
        <Route path='/save/boards' element={<SavedBoards setBlur={onBlur}/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/recipes/:category' element={<CategoryLoader/>}/>
        <Route path='/allcategories' element={<AllCategoriesPage/>}/>
    </Routes>
    </>
  )
}

export default Routing