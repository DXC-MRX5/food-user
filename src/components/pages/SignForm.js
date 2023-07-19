import React, { useEffect, useState } from 'react'
import { VscChromeClose } from 'react-icons/vsc';
import { BiErrorCircle } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';
import { SiApple } from 'react-icons/si';

const SignForm = ({hideLog, hideSign, clearBlur}) => {
  const closeForm =()=>{
    hideSign(false);
    clearBlur(false);
  }
  const handleLog = ()=>{
    hideSign(false)
    hideLog(true);
  }
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({})
  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = (e) => {
      e.preventDefault();
      setShowPassword(!showPassword);
      return setRegistered(false);
  };
  const handleChange=(e)=>{
    setFormData({...formData, [e.target.name]:e.target.value});
    setFormErrors(validate(formData));
  }
  const handleSubmit = (e)=>{
      e.preventDefault();
      setFormErrors(validate(formData));
      setRegistered(true);
  }
  useEffect(()=>{
      if(Object.keys(formErrors).length === 0 && registered){
          // axios.post("http://localhost:8000/api/user/register", formData)
          // .then((response)=>{
          //     alert(response.data.message);
          //     navigate('/login');
          // })
          // .catch((error)=>console.log(error.message))
          console.log(formData);
      }
  })
  const mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const validate = (data)=>{
      const errors = {};
      if(!data.email){
        errors.email = "Please fill out this required field."
      }
      else if (!data.email.match(mailformat)){
        errors.email = `Please enter a valid email address. It should include an "@" symbol. For example, your@email.com.`
      }
      if(!data.password){
        errors.password = "Please fill out this required field."
      }
      else if(data.password.length < 6){
        errors.password = "Password must be more than 6 carachters!"
      }
      return errors;
  }
  return (
    <div className='LogForm'>
      <div className='closeBtnBox'>
        <VscChromeClose onClick={closeForm} className='close-icon'/>
      </div>
      <h2>CREATE AN ACCOUNT</h2>
      <p className='introductory-para'>Save recipes across devices, write reviews, and share your own photos</p>
      <form className='formContainer'>
        <div className='formElement'>
          <label htmlFor='email'>EMAIL</label>
          <input type="email" name='email' id='email' placeholder='your@email.com' onChange={handleChange}/>
        </div>
        {formErrors.email && <p className='alertText'><BiErrorCircle/>{formErrors.email}</p>}
        <div className='formElement'>
          <label htmlFor='password'>PASSWORD</label>
          <input type={showPassword ? 'text' : 'password'} value={formData.password} name='password' id='password' placeholder='Password' onChange={handleChange}/>
          {showPassword ? <button className='eyeBtn' onClick={handleTogglePassword}>HIDE</button> : <button className='eyeBtn' onClick={handleTogglePassword}>SHOW</button>}
        </div>
        {formErrors.password && <p className='alertText'><BiErrorCircle/>{formErrors.password}</p>}
        <div className='check-Box'>
        <input type='checkbox' id='agreement'/><p>I agree to the Visitor Agreement and have read the Privacy Notice. I understand Discovery and its affiliates may use my email address to send updates, ads, and offers. Learn more here.</p>
        </div>
        {(Object.keys(formErrors).length === 0) ? <button className='formBtn' onClick={handleSubmit}>CREATE ACCOUNT</button> : <button style={{pointerEvents:'none', opacity:'50%'}} className='formBtn' onClick={handleSubmit}>CREATE ACCOUNT</button>}
      </form>
      <h3 style={{color:'black'}}>OR CONTINUE WITH</h3>
      <div className='icon-boxCntnr' style={{justifyContent:'center', gap:'20px'}}>
        <div className='icon-box apple-box'><SiApple className='iconBtn appleIcon'/></div>
        <div className='icon-box'><FcGoogle className='iconBtn'/></div>
      </div>
      <h4>Already a member? <button className='signBtn' onClick={handleLog}>Log In</button></h4>
    </div>
  )
}

export default SignForm