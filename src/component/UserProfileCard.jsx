import React from 'react';

const UserProfileCard = ({image, name, skill}) => {
  return (
    <>
     <div className="card">
        <img src={image} alt={image} />
        <h1>{name}</h1>
        <p>{skill}</p>
        <button>Contact Us</button>
     </div>
    </>
  )
}

export default UserProfileCard;
