import React from 'react'

const Profile = ({name,image,city}) => {
  return (
    <div>
      <h1>{name}</h1>
   <img src={image} alt="" />
     <h1>{city}</h1>
    </div>
  )
}

export default Profile
