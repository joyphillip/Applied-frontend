import React, { Component } from 'react';
// eslint-disable-next-line
import './App.css';
import CreateJob from './components/CreateJob';
import JobList from './components/JobList';
// import Register from './Nav/Register';



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

  // handleToggleOffer = (job) => {
  //   fetch(baseURL + '/jobs/' + job._id, {
  //     method:'PUT',
  //     body: JSON.stringify({offer: !job.offer}),
  //     headers: {
  //       'Content-type' : 'application/json'
  //     }
  //   }).then(res => res.json())
  //   .then(resJson => {
  //     const copyJobs = [...this.state.jobs]
  //     const findIndex = this.state.jobs.findIndex(job => job._id === resJson._id)
  //     copyJobs[findIndex].offer = resJson.offer
  //     this.setState({jobs: copyJobs})
  //   })
  // }

  handleDeleteJob = (id) => {
    fetch(baseURL + '/jobs/' + id, {
      method: 'DELETE'
    }).then( res => {
      const findIndex = this.state.jobs.findIndex(job => job._id === id)
      const copyJobs = [...this.state.jobs]
      copyJobs.splice(findIndex, 1)
      this.setState({jobs: copyJobs})
    })
  }

  render() {
    return (
      <div className='container'>
      <h1 className='head'> Applied. </h1>
      {/* <Register /> */}
      {<CreateJob handleAddJob={this.handleAddJob}/>}
      <JobList />
      </div>
    )
  }
}




export default App;
