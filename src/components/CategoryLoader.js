import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { SiPinterest, SiFacebook } from 'react-icons/si'
import { ImMail4 } from 'react-icons/im'
import SimpleBackdrop from './mainComponents/Backdrop';
import IWantToMakeSearch from './mainComponents/IWantToMakeSearch';

const CategoryLoader = () => {
  const [data, setData] = useState();
  const params = useParams().category
  console.log(params)
    useEffect(() => {
        axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${params}&app_id=1579965e&app_key=e2969e8f7e93c750b2b4873e06ab2cc6`)
            .then((response) => setData(response.data.hits))
    }, [params])
  return (
    <>
    <div className='recipeHeader'>
    <h1 style={{color:'black'}}>Top {data && data.length} easy {params} dishes</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div className='category-iconBox'>
      <SiPinterest className='category-icon pinIcon'/>
      <SiFacebook className='category-icon fcbIcon'/>
      <ImMail4 className='category-icon mlIcon'/>
    </div>
    <div className='recipesContainer'>
    {data ? data.map((item, index)=>{
      return(
      <div key={index} className='recipeCard'>
        <Link to={`/display/${item.recipe.label}`}><img src={item.recipe.image} alt='kuch bhi' className='cardImage'/></Link>
        <div className='cardText'>
          <h5>RECIPE</h5>
          <h2>{item.recipe.label}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
      </div>
      )
    }) : <SimpleBackdrop/>}
    </div>
    <IWantToMakeSearch/>
    </>
  )
}

export default CategoryLoader