import React, { Component } from 'react';
// eslint-disable-next-line
import './App.css';
import CreateJob from './components/CreateJob';
import JobList from './components/JobList';
// import Register from './Nav/Register';
// import CreateJob from './components/CreateJob';

// import ShowJobList from './components/ShowJobList'
// import ShowJobDetails from './components/ShowJobDetails'
// import UpdateJobInfo from './components/UpdateJobInfo'


let baseURL = process.env.REACT_APP_BACKEND_URL

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: []
    }
  }

  componentDidMount(){
    this.getJobs()
  }

  getJobs = () => {
    fetch(baseURL + '/jobs')
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return [];
      }
    })
    .then((data) => {
      console.log(data);
      this.setState({jobs: data.jobs})
    })
  }

  handleAddJob = (job) => {
    const copyJobs = [...this.state.jobs]
    copyJobs.unshift(job)
    this.setState({jobs: copyJobs})
  }

  render() {
    return (
      <div className='container'>
      <h1> Welcome to Applied! </h1>
      {/* <Register /> */}
      {<CreateJob handleAddJob={this.handleAddJob}/>}
      <JobList/>
      </div>
    )
  }
}




export default App;
