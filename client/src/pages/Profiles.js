import React from 'react';

function Profile() { 
    return(
      <div>
        <div className="container">
          <div class="card" style={{width: 18+"rem"}}>
            <div id="card-img">
              {/* <img src={require('../img/headshot.png')} alt="headshot"/> */}
            </div>

            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    );

 };

 export default Profile;