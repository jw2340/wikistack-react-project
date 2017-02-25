import React, { Component } from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router'

export default class AddPage extends Component {

  constructor() {
    super();
    this.state = {status: 'open'};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios.post('/api/wiki', this.state)
    .then(res => {
      hashHistory.push('/wiki');
    })
    .catch(console.error.bind(console));
  }

  render () {
    return (
      <div>
        <h3>Add a Page</h3>
        <hr />
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label htmlFor="name" className="col-sm-2 control-label">Author Name</label>
            <div className="col-sm-10">
              <input name="name" type="text" className="form-control" onChange={this.handleInputChange} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="col-sm-2 control-label">Author Email</label>
            <div className="col-sm-10">
              <input name="email" type="text" className="form-control" onChange={this.handleInputChange} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="title" className="col-sm-2 control-label">Page Title</label>
            <div className="col-sm-10">
              <input name="title" type="text" className="form-control" onChange={this.handleInputChange} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="content" className="col-sm-2 control-label">Content</label>
            <div className="col-sm-10">
              <textarea name="content" onChange={this.handleInputChange}></textarea>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="status" className="col-sm-2 control-label">Status</label>
            <div className="col-sm-10">
              <select name="status" onChange={this.handleInputChange}>
                <option>open</option>
                <option>closed</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="tags" className="col-sm-2 control-label">Tags</label>
            <div className="col-sm-10">
              <input name="tags" type="text" className="form-control" onChange={this.handleInputChange} />
            </div>
          </div>

          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-primary">submit</button>
          </div>

        </form>
      </div>
    );
  }
}
