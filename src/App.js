import React, { Component } from 'react';
// eslint-disable-next-line
import './App.css';
import CreateJob from './components/CreateJob';
// import Register from './Nav/Register';
import JobCard from './components/JobCard';
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


  render() {
    return (
      <div className='container'>
      <h1> Welcome to Applied! </h1>
      {/* <Register /> */}
      {/* {<JobCard/>} */}
      {<CreateJob/>}
      <table>
      <th>Company</th>
      <th>Job Title</th>
      <th>Salary</th>
      <th>Date </th>
      <th>Offer?</th>
        <tbody>
          {this.state.jobs.map(job => {
            return (
              <tr key={job._id}>
                <td> {job.company}</td>
                <td> {job.job}</td>
                <td> {job.salary}</td>
                <td> {job.date} </td>
                <td> {job.offer}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
    )
  }
}




export default App;
