import React, { Component } from 'react';


export default class Imageupload extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            profileImg: ''
        }
    }

    onFileChange(e) {
        this.setState({ profileImg: e.target.files[0] })
    }

    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('profileImg', this.state.profileImg)
        
        fetch('/api/images', {
            method: 'PUT',
            body:  formData,
          })
          .then(res => {
            if (res.status === 200) {
              this.props.history.push('/dashboard');
             
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
                            <input type="file"  onChange={this.onFileChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}