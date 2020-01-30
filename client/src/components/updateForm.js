import React from 'react';
// import FilesUploadComponent from "../components/files-upload.component";


function UpdateForm(props){

  return(

    <div className="update-form-wrapper">
    {/* <FilesUploadComponent  /> */}
      <form className="update-form" onSubmit={props.submitUpdate}>
        <div className="form-group">
          <label >Name</label>
          <input type="text" name="name" onChange={props.updateChange} value={props.name} className="form-control" aria-describedby="emailHelp"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label >Bio</label>

          <div className="input-group">
            <textarea className="form-control" aria-label="With textarea" type="text" name="bio" onChange={props.updateChange} value={props.bio}></textarea>
          </div>

          {/* <input type="text" name="bio" onChange={props.updateChange} value={props.bio} className="form-control" aria-describedby="emailHelp"/> */}
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label >Category</label>
          {/* <input type="text" name="category" onChange={props.updateChange}   className="form-control" aria-describedby="emailHelp"/> */}
            <select value={props.category} class="form-control" name="category" onChange={props.updateChange}>
              <option value="painting">paint</option>
              <option value="sketch">Sketch</option>
              <option value="photo">Photo</option>
              <option value="other">Other</option>
            </select>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label >Zip Code</label>
          <input type="text" name="zip" className="form-control" onChange={props.updateChange} value={props.zip}  aria-describedby="emailHelp"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        
        
        <button type="submit" id="btn" className="btn btn-primary">Submit</button>

        
      </form>
    </div>
  )

}

export default UpdateForm;
