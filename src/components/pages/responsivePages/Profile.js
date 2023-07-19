import React from 'react'
import { PiUserThin } from 'react-icons/pi';

const Profile = () => {
  return (
  <>
    <div className='profileHeader'></div>
    <div className='userDetailsBox'>
      <div className='profileDp'></div>
      <div className='follow-container'>
        <div className='followBox'>
          <p>FOLLOWERS</p>
          <h4>0</h4>
        </div>
        <div className='followBox'>
          <p>FOLLOWING</p>
          <h4>0</h4>
        </div>
      </div>
      <div className='nameDateBox'>
        <h4>@UserName</h4>
        <div className='verticalLine'></div>
        <h4><PiUserThin/> Joined 07/2023</h4>
      </div>
    </div>
    <div className='profileContentBox'>
      <div className='contentNav'></div>
      <div className='content'></div>
    </div>
  </>
  )
}

export default Profile
// sessionStorage.setItem('token', 'sjahfih2341j43jr')