import React, { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai'
import { BsBookmark } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { HiOutlineUser } from 'react-icons/hi'
import { Link, useNavigate } from "react-router-dom";
import LogForm from '../pages/LogForm';
import SignForm from '../pages/SignForm';

const Navbar = ({onBlur}) => {
    const navigate = useNavigate();
    const islogged = sessionStorage.getItem('token');
    const [login, setLogin] = useState(false);
    const [signup, setSignup] = useState(false);
    const [showProfile, setShowProfile]=useState(false);
    const handleLog = ()=>{
        setLogin(true);
        onBlur(true);
    }
    const handleProfileBox = ()=>{
        setShowProfile(!showProfile);
    }
    const handleProfile = ()=>{
        setShowProfile(!showProfile);
        navigate('/profile');
    }
    return (
        <>
        {login ? <LogForm hideLog={setLogin} showSign={setSignup} clearBlur={onBlur}/>:null}
        {signup ? <SignForm hideLog={setLogin} hideSign={setSignup} clearBlur={onBlur}/>:null}
            <div id={(login || signup) ? "blur-navbar" : "navbar"}>
                <Link to="/" className="navbar-heading-link">
                    <h1>Food<span>.</span></h1>
                </Link>
                <div id="recipe-Category-Cntnr">
                    <div className="category-dropdown-cntnr">
                        <ul className="dropdown-button">RECIPES</ul>
                        <div className="dropdown-content">
                            <Link to='/recipes/breakfast and brunch recipes' className="dropdown-links">Breakfast & Brunch Recipes</Link>
                            <Link to='/recipes/lunch recipes' className="dropdown-links">Lunch Recipes</Link>
                            <Link to='/recipes/appetizers and snack recipes' className="dropdown-links">Appetizers & Snack Recipes</Link>
                            <Link to='/recipes/dinner recipes' className="dropdown-links">Dinner Recipes</Link>
                            <Link to='/recipes/desert recipes' className="dropdown-links">Desert Recipes</Link>
                            <Link to='/recipes/drink and cocktail recipes' className="dropdown-links">Drink & Cocktail Recipes</Link>
                            <Link to='/recipes/sidedish recipes' className="dropdown-links">Side Dish Recipes</Link>
                            <Link to='/recipes/grilling and bbq recipes' className="dropdown-links">Grill & BBQ Recipes</Link>
                        </div>
                    </div>
                    <div className="category-dropdown-cntnr">
                        <ul className="dropdown-button">POPULAR</ul>
                        <div className="dropdown-content">
                            <Link to='/recipes/trending' className="dropdown-links">Trending Now</Link>
                            <Link to='/recipes/casserole' className="dropdown-links">Casserole Recipes</Link>
                            <Link to='/recipes/chilli' className="dropdown-links">Chilli Recipes</Link>
                            <Link to='/recipes/soup' className="dropdown-links">Soup Recipes</Link>
                            <Link to='/recipes/pasta' className="dropdown-links">Pasta Recipes</Link>
                            <Link to='/recipes/bread' className="dropdown-links">Bread Recipes</Link>
                            <Link to='/recipes/cookie' className="dropdown-links">Cookie Recipes</Link>
                            <Link to='/recipes/salad' className="dropdown-links">Salad Recipes</Link>
                        </div>
                    </div>
                    <div className="category-dropdown-cntnr">
                        <ul className="dropdown-button">MEAT & SEAFOOD</ul>
                        <div className="dropdown-content">
                            <Link to='/recipes/chicken recipes' className="dropdown-links">Chicken Recipes</Link>
                            <Link to='/recipes/salmon recipes' className="dropdown-links">Salmon recipes</Link>
                            <Link to='/recipes/porkchop recipes' className="dropdown-links">Pork Chop recipes</Link>
                            <Link to='/recipes/groundbeef recipes' className="dropdown-links">Ground Beef Recipes</Link>
                            <Link to='/recipes/shrimp recipes' className="dropdown-links">Shrimp Recipes</Link>
                        </div>
                    </div>
                    <div className="category-dropdown-cntnr">
                        <ul className="dropdown-button">HEALTHY & DIET</ul>
                        <div className="dropdown-content">
                            <Link to='/recipes/keto recipes' className="dropdown-links">Keto recipes</Link>
                            <Link to='/recipes/healthy recipes' className="dropdown-links">Healthy Recipes</Link>
                            <Link to='/recipes/vegetarian recipes' className="dropdown-links">Vegetarian Recipes</Link>
                            <Link to='/recipes/vegan recipes' className="dropdown-links">Vegan Recipes</Link>
                            <Link to='/recipes/mediterranean recipes' className="dropdown-links">Mediterranean Recipes</Link>
                            <Link to='/recipes/weightwatchers recipes' className="dropdown-links">Weight Watchers Recipes</Link>
                            <Link to='/recipes/lowcarb recipes' className="dropdown-links">Low Carb recipes</Link>
                            <Link to='/recipes/glutenfree recipes' className="dropdown-links">Gluten-Free Recipes</Link>
                        </div>
                    </div>
                    <div className="category-dropdown-cntnr">
                        <ul className="dropdown-button">HOLIDAYS</ul>
                        <div className="dropdown-content">
                            <Link to='/recipes/dinner party recipes' className="dropdown-links">Dinner Party Recipes</Link>
                            <Link to='/recipes/game day recipes' className="dropdown-links">Game Day Recipes</Link>
                            <Link to='/recipes/valentines day recipes' className="dropdown-links">Valentine's Day recipes</Link>
                            <Link to='/recipes/stpatricks day recipes' className="dropdown-links">St. Patrick's Day Recipes</Link>
                            <Link to='/recipes/easter recipes' className="dropdown-links">Easter Recipes</Link>
                            <Link to='/recipes/cincodemayo recipes' className="dropdown-links">inco de Mayo Day Recipes</Link>
                            <Link to='/recipes/mothers day recipes' className="dropdown-links">Mother's Day Recipes</Link>
                            <Link to='/recipes/memorial day recipes' className="dropdown-links">Memorial Day Recipes</Link>
                        </div>
                    </div>
                    <div className="category-dropdown-cntnr">
                        <ul className="dropdown-button">CUISINE</ul>
                        <div className="dropdown-content">
                            <Link to='/recipes/mexican recipes' className="dropdown-links">Mexican recipes</Link>
                            <Link to='/recipes/italian recipes' className="dropdown-links">Italian Recipes</Link>
                            <Link to='/recipes/indian recipes' className="dropdown-links">Indian Recipes</Link>
                            <Link to='/recipes/thai recipes' className="dropdown-links">Thai Recipes</Link>
                            <Link to='/recipes/korean recipes' className="dropdown-links">Korean recipes</Link>
                            <Link to='/recipes/french recipes' className="dropdown-links">French rceipes</Link>
                            <Link to='/recipes/latinamerican recipes' className="dropdown-links">Latin American Recipes</Link>
                            <Link to='/recipes/chinese recipes' className="dropdown-links">Chinese Recipes</Link>
                        </div>
                    </div>
                    <div className="category-dropdown-cntnr">
                        <ul className="dropdown-button">SEASONAL</ul>
                        <div className="dropdown-content">
                            <Link to='/recipes/spring recipes' className="dropdown-links">Spring Recipes</Link>
                            <Link to='/recipes/summer recipes' className="dropdown-links">Summer Recipes</Link>
                            <Link to='/recipes/fall recipes' className="dropdown-links">Fall Recipes</Link>
                            <Link to='/recipes/winter recipes' className="dropdown-links">Winter Recipes</Link>
                        </div>
                    </div>
                </div>
                <div className="navbar-iconBox">
                    <Link to='/search'><AiOutlineSearch className="navbar-icon"/></Link>
                    <Link to='/save/recipes'><BsBookmark className="navbar-icon"/></Link>
                    {islogged ?
                        <FaUserCircle className="navbar-icon" onClick={(handleProfileBox)}/>
                        :
                    <HiOutlineUser className="navbar-icon" onClick={handleLog}/>}
                    {showProfile ?
                        <div className="profileBox">
                            <button onClick={handleProfile}>Profile</button>
                            <button>Add a Recipe</button>
                            <button>User Settings</button>
                            <button>Log Out</button>
                        </div>
                        :
                        null}
                </div>
            </div>
        </>
    );
};

export default Navbar;
