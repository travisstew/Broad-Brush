import React from 'react';

function ArtworkCards(props){
    return(
      <div>
          <h1>{props.users}</h1>
          {/* <img src={props.users[0].pics[0]} alt="profile"></img> */}
      </div>
    )

}


export default ArtworkCards;