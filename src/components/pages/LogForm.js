import React, { useEffect, useState } from 'react'
import { VscChromeClose } from 'react-icons/vsc';
import { BiErrorCircle } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { SiApple } from 'react-icons/si';

const LogForm = ({hideLog, showSign, clearBlur}) => {
  const closeForm =()=>{
    hideLog(false);
    clearBlur(false);
  }
  const handleSign =()=>{
    hideLog(false);
    showSign(true);
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
      <h2>LOG IN</h2>
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
        {(Object.keys(formErrors).length === 0) ? <button className='formBtn' onClick={handleSubmit}>LOG IN</button> : <button style={{pointerEvents:'none', opacity:'50%'}} className='formBtn' onClick={handleSubmit}>LOG IN</button>}
      </form>
      <h3>Forgot Password?</h3>
      <h3 style={{color:'black'}}>OR CONTINUE WITH</h3>
      <div className='icon-boxCntnr'>
        <div className='icon-box apple-box'><SiApple className='iconBtn appleIcon'/></div>
        <div className='icon-box fb-box'><BsFacebook className='iconBtn fbIcon'/></div>
        <div className='icon-box'><FcGoogle className='iconBtn'/></div>
        <div className='icon-box'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png' alt='amazon' className='iconBtn'/></div>
      </div>
      <h4>Don't have an account yet? <button className='signBtn' onClick={handleSign}>Sign Up</button></h4>
    </div>
  )
}

export default LogForm