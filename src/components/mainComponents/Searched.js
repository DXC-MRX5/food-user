import React,{useState} from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import IWantToMakeSearch from './IWantToMakeSearch'
import axios from 'axios'
import SimpleBackdrop from './Backdrop'
import { Link } from 'react-router-dom'


const Searched = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const getSearchRecipes = (searchQuery) => {
    axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=1579965e&app_key=e2969e8f7e93c750b2b4873e06ab2cc6`)
        .then((response) => setData(response.data.hits))
        .catch((error) => console.log("Error", error))
    console.log(data)
  }
  return (
  <>
    <div className='searchBar'>
      <div className='searchBox-wrapper'>
        <div className='searchBox'>
          <p>I WANT TO MAKE</p>
          <button style={{border:'none', backgroundColor:'inherit', cursor:'pointer'}} onClick={() => getSearchRecipes(search)}><AiOutlineSearch style={{color:'gray', width:'25px', height:'25px'}} /></button>
          <input type='text' name='search' onChange={(e) => setSearch(e.target.value)}/>
          <button>clear</button>
        </div>
        <hr/>
      </div>
      <div className='searchBar-recentBox'>
        <h3>YOUR RECENT SEARCHES</h3>
        <div className='searchedItem'>
          <p>something 1 </p>
          <p> | </p>
          <p>something 2 </p>
          <p> | </p>
          <p>something 3 </p>
        </div>
      </div>
    </div>
    <div className='resultContainer'>
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
    </div>
    <IWantToMakeSearch/>
  </>
  )
}

export default Searched