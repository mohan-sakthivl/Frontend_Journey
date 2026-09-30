import React from 'react'
import profileImage from '../assets/Roody.jpg'

const ProfileCard = () => {
  return (
    <>
    <div className="profile-card">
      <img
        src={profileImage} className="profile-image"/>

      <h2>Roody</h2>
      <p className="role">Full Stack Developer</p>

      <button className="profile-button">
        View Profile
      </button>
    </div>
    </>
  )
}

export default ProfileCard