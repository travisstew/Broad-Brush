import React from 'react';

function Profile(props) {
    return (
      <div className="profile-div">

        <img id="profile-pic" src={props.profilePic} alt="profile pic"></img>
          <h5 >{props.name}</h5>
          <h6>{props.category}</h6>
          <p >{props.bio}</p>

      </div>
    );

  }

  export default Profile;