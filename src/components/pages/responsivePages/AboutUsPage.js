import React from 'react'
import AboutUsPageBannerImage from '../../../media/about-us-page-banner-image.jpg'
import IWantToMakeSearch from '../../mainComponents/IWantToMakeSearch'
import { SiPinterest, SiFacebook } from 'react-icons/si'
import { ImMail4 } from 'react-icons/im'

const AboutUsPage = () => {
    return (
        <>
            <div id='about-page'>
                <div id='about-page-container'>
                    <h2>ABOUT FOOD.COM</h2>
                    <div id='about-page-food-logo-by-team-food'>
                        <div id='about-page-food-logo-by-team-food-left-part'>
                            <div id='about-page-food-logo-left-part'>
                                <h3>FOOD<span>.</span></h3>
                            </div>
                            <div id='about-page-by-team-food-left-part'>
                                <p>By <span>Team Food.com</span></p>
                            </div>
                        </div>
                        <div id='about-page-food-logo-by-team-food-right-part'>
                            <a href='https://in.pinterest.com/fooddotcom/' target='blank'><SiPinterest className='category-icon pinIcon'/></a>
                            <a href='https://www.facebook.com/food.com/' target='blank'><SiFacebook className='category-icon fcbIcon'/></a>
                            <a href='https://help.food.com/hc/en-us' target='blank'><ImMail4 className='category-icon mlIcon'/></a>
                        </div>
                    </div>
                    <img src={AboutUsPageBannerImage} alt='food-banner'></img>
                    <div id='about-page-description'>
                        <p>To our favorite community of home cooks we say: Welcome back to Food.com!</p>
                        <p>We may have a different name today, but there’s one thing that will never change,<br /> and that’s what you can expect from us:</p>
                        <span>ALL THE RECIPES YOU’LL EVER NEED. PERIOD.</span>
                        <p>In other words, the new version of Food.com combines all of the things you loved most <br /> about the site with some helpful new features, including:</p>
                        <span>-Over 500,000 dishes created by users like you, with fresh recipes added every day</span><br />
                        <span>-Easy access to your favorite saved recipes and the option to organize them into boards</span><br />
                        <span>-A new activity feed where you can add your reviews, tweaks, questions and photos</span>
                        <p>So if you’re hungry for good food and great conversation with fellow cooks, we’re <br /> so happy you’re here! And there’s no better place to start than our community’s <span>75 Top- <br /> Rated Recipes of All Time</span>, from five-star <span>banana bread</span> to our most-popular <span>mac and <br /> cheese.</span></p>
                        <p>Got more questions about the site? Contact our Customer Support team at <br /> <span>help@food.com</span> </p>
                        <p>Cheers and happy cooking, <br /> Team Food</p>
                    </div>
                    <div id='about-page-about-team-food'>
                        <h3>ABOUT TEAM FOOD.COM</h3>
                        <hr />
                        <div id='about-page-about-team-food-logo-and-description'>
                            <div id='about-page-about-team-food-logo'>
                                <h3>FOOD<span>.</span></h3>
                            </div>
                            <p>Hungry for good food AND great conversation? Food.com boasts <br /> a veritable smorgasbord of over 500,000 recipes and a community- <br /> inspired activity feed that allows users to share reviews, tweaks, <br /> questions and photos of their favorite recipes. Grab a plate and <br /> join the fun!</p>
                        </div>
                    </div>
                </div>
            </div>
            <IWantToMakeSearch/>
        </>
    )
}

export default AboutUsPage