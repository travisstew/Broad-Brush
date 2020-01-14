import React, { Component } from 'react';
import FilesUploadComponent from "./components/files-upload.component";


class Dashboard extends Component {

  state = {  }


  render() { 
    return (  
      <div>
        <div>
          img
        </div>
        
        <div className="card1" style={{width: 18+"rem"}}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="card-link">Card link</a>
            <a href="/" className="card-link">Another link</a>
          </div>
        </div>

        <button type="button" className="btn btn-primary">Edit Profile</button>

        {/* edit profile */}




      </div>
    );
  }
}
 
export default Dashboard;