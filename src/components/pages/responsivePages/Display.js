import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SimpleBackdrop from '../../mainComponents/Backdrop'
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs'
import { LiaShareSolid } from 'react-icons/lia'
import { TfiDownload } from 'react-icons/tfi'
import { SlPrinter, SlCamera } from 'react-icons/sl'
import { GrPrevious, GrNext } from 'react-icons/gr'


const Display = ({ saveRecipe }) => {
    const logged = sessionStorage.getItem('token');
    const navigate = useNavigate();
    const [data, setData] = useState()
    const [notsaved, setNotSaved] = useState(true)
    const { recipename } = useParams()
useEffect(() => {
    axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${recipename}&app_id=1579965e&app_key=e2969e8f7e93c750b2b4873e06ab2cc6`)
        .then((response) => setData(response.data.hits))
        .catch((error) => console.log("Error", error))
}, [recipename])

return (
    <>
    <div className='displayHeader'>
        <button style={{border:'none', backgroundColor:'inherit', cursor:'pointer'}}><GrPrevious/>PREVIOUS RECIPE</button>
        <button style={{border:'none', backgroundColor:'inherit', cursor:'pointer'}}>NEXT RECIPE<GrNext/></button>
    </div>
        <div className='display-container'>
            {
                data ? data.filter((item) => { return item.recipe.label === recipename }).slice(0, 1).map((element, index) => (
                    <div className='display-contentBox'>
                        <h1>{element.recipe.label}</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className='display-Iconbox'>
                            {notsaved ? <button className='displayBtn' onClick={()=>{
                                if(logged){
                                    saveRecipe(element)
                                    setNotSaved(false)
                                    alert("Recipe Saved Successfully!!!")
                                    return navigate('/save/recipes')
                                }
                                alert("You need to Log In First !")
                                navigate('/')
                            }}><BsBookmark className='displayIcon'/></button>
                            :<button className='displayBtn'><BsFillBookmarkFill className='displayIcon'/></button>}
                            <button className='displayBtn'><LiaShareSolid className='displayIcon'/></button>
                            <button className='displayBtn'><TfiDownload className='displayIcon'/></button>
                            <button className='displayBtn'><SlPrinter className='displayIcon'/></button>
                            <button className='displayBtn camera'><SlCamera className='displayIcon'/>I MADE THIS</button>
                        </div>
                        <img src={element.recipe.image} alt=''/>
                        {element.recipe.ingredientLines.map((item) => (<p>{item}</p>))}
                    </div>
                )) : 
                <SimpleBackdrop/>
            }
        </div>
    </>
)
}

export default Display