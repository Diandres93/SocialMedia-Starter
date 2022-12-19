import React from 'react';
import Covr from '../../img/cov.jpg';
import Profile from '../../img/profilImg.jpg';
import "./ProfileCard.css"

const ProfileCard = () => {
  return (
    <div className='ProfileCard'>
      <div className='ProfileImages'>
        <img src={Covr} alt=''/>
        <img src={Profile} alt=''/>
      </div>
      <div className='ProfileName'>
        <span>Isabella Muñoz</span>
        <span>Estudiante</span>

      </div>
    </div>
  )
}

export default ProfileCard