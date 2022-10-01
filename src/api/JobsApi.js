// import './App.css';
import React, { Component } from 'react'
import Jobinfo from './Jobinfo';

class JobsApi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      baseURL: 'https://api.adzuna.com/v1/api/jobs/us/search/1?',
      appID:'app_id=97947723&',
      apiKey: `app_key=${process.env.REACT_APP_API_KEY}`,
      company: '&company=',
      what: "what=",
      jobTitle: '',
      searchURL: ''
    }
  }

  handleChange = (event) => {
    // console.log(event.target.id)
    // console.log(event.target.value)
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      searchURL: this.state.baseURL + this.state.appID + this.state.apiKey + this.state.company + this.state.jobTitle
    }, () => {
      fetch(this.state.searchURL)
      .then(response => { return response.json() })
      .then(json => this.setState({
        companyName: json,
        jobTitle: ''
      }), (err) => console.log(err))
    })

  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Job Search: </label>
          <input
            id="jobTitle"
            type="text"
            placeholder="Enter Company Name "
            value={this.state.jobTitle}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Find Job Info"
          />
        </form>

        {/* <JobInfo companyName={this.state.companyName} /> */}
        { (this.state.companyName)
          ? <Jobinfo companyName={this.state.companyName} />
          : ''
        }
      </div>
    );
  }
}

export default JobsApi;
