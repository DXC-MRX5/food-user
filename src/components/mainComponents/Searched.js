import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import IWantToMakeSearch from './IWantToMakeSearch'


const Searched = () => {
  return (
  <>
    <div className='searchBar'>
      <div className='searchBox-wrapper'>
        <div className='searchBox'>
          <p>I WANT TO MAKE</p>
          <AiOutlineSearch style={{color:'gray', width:'25px', height:'25px'}}/>
          <input type='text' name='search'/>
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
    <IWantToMakeSearch/>
  </>
  )
}

export default Searched