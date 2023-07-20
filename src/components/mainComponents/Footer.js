import React from 'react'
import { ImFacebook } from 'react-icons/im'
import { BiUpArrowAlt } from 'react-icons/bi'
import { TfiEmail } from 'react-icons/tfi'
import { BiChevronUp } from 'react-icons/bi'
import { FaInstagram, FaPinterestP, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-left'>
        <div className='iconBox'>
          <a title="Facebook" href="https://www.facebook.com/Food.com" target='blank'><ImFacebook className='footer-icon fb'/></a>
          <a title="Instragram" href="https://www.instagram.com/fooddotcom/" target='blank'><FaInstagram className='footer-icon insta'/></a>
          <a title="Pinterest" href="https://www.pinterest.com/fooddotcom/" target='blank'><FaPinterestP className='footer-icon pin'/></a>
          <a title="Twitter" href="https://twitter.com/fooddotcom" target='blank'><FaTwitter className='footer-icon twtr'/></a>
          <a title="YouTube" href="https://www.youtube.com/fooddotcom" target='blank'><FaYoutube className='footer-icon ytb'/></a>
          <TfiEmail className='footer-icon mail'/>
        </div>
        <div className='linkBox'>
          <Link className='footer-links' to='/allcategories'>All Categories</Link>
          <Link className='footer-links' to='/sitemap'>Site Map</Link>
          <Link className='footer-links' to='/about'>About Us</Link>
          <a className='footer-links' href='https://help.food.com/hc/en-us' target='blank'>Help</a>
        </div>
      </div>
      <div className='footer-right'>
        <div className='cprghtBox'>
          <button className='footerBtn'>The Discovery Family of Networks<BiChevronUp style={{color:'white'}}/></button>
          <p>© 2023 Warner Bros. Discovery, Inc. or its subsidiaries and affiliates. All rights reserved.</p>
        </div>
        <div className='linkBox'>
          <a href="https://corporate.discovery.com/contact/advertising/" target="blank" className='footer-links'>Advertise</a>
          <a href="https://corporate.discovery.com/tracking-technologies-notice/#targeted" target="blank" className='footer-links'>AdChoices</a>
          <a href="https://corporate.discovery.com/privacy-policy/" target="blank" className='footer-links'>Privacy Notice</a>
          <a href="https://corporate.discovery.com/visitor-agreement/" target="blank" className='footer-links'>Visitor Agreement</a>
        </div>
        <div className='linkBox'>
          <a href="https://corporate.discovery.com/privacy-policy/#cappi" target="blank" className='footer-links'>California Privacy Notice</a>
          <button className='footerBtn'>Do Not Sell or Share My Personal Information</button>
        </div>
      </div>
      <button className='bcTopBtn' onClick={()=>window.scrollTo({top:0, behavior:'smooth'})}>Back to Top <BiUpArrowAlt style={{width:'23px', height:'23px'}}/></button>
    </div>
  )
}

export default Footer
