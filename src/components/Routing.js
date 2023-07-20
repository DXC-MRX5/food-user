import React,{ useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './mainComponents/Home'
import Searched from './mainComponents/Searched'
import CategoryLoader from './CategoryLoader'
import SavedBoards from './pages/responsivePages/SavedBoards'
import SavedRecipes from './pages/responsivePages/SavedRecipes'
import Profile from './pages/responsivePages/Profile'
import AllCategoriesPage from './pages/responsivePages/AllCategoriesPage'
import AboutUsPage from './pages/responsivePages/AboutUsPage'
import SiteMapPage from './pages/responsivePages/SiteMapPage'
import ScrollToTop from './mainComponents/ScrollToTop'
import Display from './pages/responsivePages/Display'

const Routing = ({onBlur}) => {
  const [recipe, setRecipe] = useState([]);
  console.log(recipe)
  const saveRecipe = (data) => {
    setRecipe([...recipe, { ...data }])
  }
  return (
    <>
    <ScrollToTop/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Searched/>}/>
        <Route path='/save/recipes' element={<SavedRecipes recipe={recipe}/>}/>
        <Route path='/save/boards' element={<SavedBoards/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/recipes/:category' element={<CategoryLoader/>}/>
        <Route path='/allcategories' element={<AllCategoriesPage/>}/>
        <Route path='/about' element={<AboutUsPage/>}/>
        <Route path='/sitemap' element={<SiteMapPage/>}/>
        <Route path='/display/:recipename' element={<Display saveRecipe={saveRecipe}/>}/>
    </Routes>
    </>
  )
}

export default Routing