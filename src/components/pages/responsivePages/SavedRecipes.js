import React,{useState, useEffect} from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import SimpleBackdrop from '../../mainComponents/Backdrop'

const SavedRecipes = ({ recipe }) => {
  const navigate = useNavigate();
  const [RECIPE, setRECIPE] = useState([])
  useEffect(() => {
    setRECIPE(recipe)
  }, [recipe])
  return (
    <div style={{width:'100%',minHeight:'80vh'}}>
    <div className='saveHeader'>
      <h2>SAVES</h2>
      <div className='searchBox-save'>
        <AiOutlineSearch className='save-search-icon'/>
        <p>|</p>
        <button>EDIT</button>
      </div>
    </div>
    <hr style={{backgroundColor:'#77e2e1', height:'6px', border:'none'}}/>
    <div className='save-navBar'>
      <button className='save-navBtn btnShadow'>RECIPES</button>
      <button className='save-navBtn' onClick={()=>navigate('/save/boards')}>MY BOARDS</button>
    </div>
    <div className='svdCard-container'>
      <div className='svdFixedCard'>
        <div className='fixedCardContent'>
          <Link className='discoverLink' to='/'>
          <BsFillPlusCircleFill className='plusIcon'/>
          <h3>DISCOVER RECIPES</h3>
          <p>----- or -----</p>
          </Link>
          <Link className='cardLink-add'>Add Your Own Recipe</Link>
        </div>
      </div>
      {RECIPE ? RECIPE.map((item, index)=>{
        return(
          <div className='svdDynamicCard'>
            <div className='dynamicCardContent'>
              <Link to={`/display/${item.recipe.label}`}><img src={item.recipe.image} alt=''/></Link>
              <h3>{item.recipe.label}</h3>
            </div>
          </div>
        )
      }):<SimpleBackdrop/>}
    </div>
    </div>
  )
}

export default SavedRecipes;