import React, { Component } from 'react';
import axios from 'axios';

export default class PhotoComponent extends Component {

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
        console.log(this.state.name);
        
        axios.put(`http://localhost:5000/api/user-profile/pics/${this.props.params}`, formData, {
        }).then(res => {
            console.log(res)
        });
        this.setState({artwork:''});
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                    <div class="form-group">
                      <label>Image Name</label>
                      <input type="text" name="name" onChange={this.onImgName} value={this.state.name} class="form-control"  />
                    </div>
                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange} />
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