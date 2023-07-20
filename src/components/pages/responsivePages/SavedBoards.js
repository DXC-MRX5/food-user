import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'

const SavedBoards = () => {
  const navigate = useNavigate();
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
      <button className='save-navBtn' onClick={()=>navigate('/save/recipes')}>RECIPES</button>
      <button className='save-navBtn btnShadow'>MY BOARDS</button>
    </div>
    <div className='svdCard-container'>
      <div className='svdFixedCard-Board'>
        <div className='fixedCardContent'>
          <Link className='discoverLink'>
          <BsFillPlusCircleFill className='plusIcon'/>
          <h3>NEW BOARD</h3>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SavedBoards;