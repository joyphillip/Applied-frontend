import { render } from "@testing-library/react";
import React, { Component} from "react";
import { Link } from 'react-router-dom'
import '../App.css'


class UpdateJobInfo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        company: '',
        job: '',
        salary: Number,
        date: '',
        offer: Boolean,
        notes: '',
      };
    }
  
    onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    onSubmit = e => {
      e.preventDefault();
  
      const data = {
        company: this.state.company,
        job: this.state.job,
        salary: this.state.salary,
        date: this.state.date,
        offer: this.state.offer,
        notes: this.state.notes
      };
    };
  
  
    render() {
      return (
        <div className="UpdateJobInfo">
          <div className="container">
            
              <div>
                <br />
                <Link to="/">
                    Show Job List
                </Link>
              </div>
              <div>
                <h1>Edit Job</h1>
                <p>
                    Update Job's Info
                </p>
              </div>
        
  
            <div>
            <form onSubmit={this.onSubmit}>
              <div className='form-group'>
                <label htmlFor="company">Company</label>
                <input
                  type='text'
                  placeholder='Company Name'
                  name='company'
                  className='form-control'
                  value={this.state.company}
                  onChange={this.onChange}
                />
              </div>
              <br />
  
              <div className='form-group'>
              <label htmlFor="job">Job</label>
                <input
                  type='text'
                  placeholder='Job Title'
                  name='job'
                  className='form-control'
                  value={this.state.job}
                  onChange={this.onChange}
                />
              </div>
  
              <div className='form-group'>
              <label htmlFor="salary">Salary</label>
                <input
                  type='text'
                  placeholder='$'
                  name='salary'
                  className='form-control'
                  value={this.state.salary}
                  onChange={this.onChange}
                />
              </div>
  
              <div className='form-group'>
              <label htmlFor="date">Date</label>
                <input
                  type='text'
                  placeholder='Date Applied'
                  name='date'
                  className='form-control'
                  value={this.state.date}
                  onChange={this.onChange}
                />
              </div>
  
              <div className='form-group'>
              <label htmlFor="offer">Offer</label>
                <input
                  type='checkbox'
                  placeholder='Yes/No'
                  name='offer'
                  className='form-control'
                  value={this.state.offer}
                  onChange={this.onChange}
                />
              </div>
              <div className='form-group'>
              <label htmlFor="notes">Notes</label>
                <input
                  type='text'
                  name='noted'
                  className='form-control'
                  value={this.state.notes}
                  onChange={this.onChange}
                />
              </div>
  
              <button type="submit">Update Job</button>
              </form>
            </div>
  
          </div>
        </div>
      );
    }
  }
  
  export default UpdateJobInfo;