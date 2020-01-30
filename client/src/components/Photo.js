import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

 class PhotoComponent extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onImgName= this.onImgName.bind(this);
        this.state = {
            artwork: '',
            name: ''
        }
    }

    onFileChange(e) {
        this.setState({ artwork: e.target.files[0]})
    }
    onImgName(e){
  
      this.setState({name: e.target.value})
    }
    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('artwork', this.state.artwork)
        formData.append('name', this.state.name)
        
        fetch('/api/user-profile/artwork', {
            method: 'PUT',
            body:  formData,
          })
          .then(res => {
            if (res.status === 200) {
              window.location.reload(true);
            } else {
              const error = new Error(res.error);
              throw error;
            }
          });
        
        
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit} encType="multipart/form-data">
                    <div className="form-group">
                      <label>Image Name</label>
                      <input type="text" name="name" onChange={this.onImgName} value={this.state.name} className="form-control"  />
                    </div>
                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" id="btn" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(PhotoComponent);