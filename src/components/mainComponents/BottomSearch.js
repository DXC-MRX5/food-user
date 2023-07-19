import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const BottomSearch = () => {
  return (
    <div className='bottomSearch'>
        <h2>FIND MORE RECIPES</h2>
        <div className='searchBtmBar'>
            <input type='text' name='search' id='searchBottom' placeholder="I'm craving..."/>
            <AiOutlineSearch className='bottomSearch-icon'/>
        </div>
        <button className='formBtn'>SEARCH</button>
    </div>
  )
}

export default BottomSearch