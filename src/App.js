import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Register from './Nav/Register';
import JobsApi from "./api/JobsApi"



// import CreateJob from './components/CreateJob'
// import ShowJobList from './components/ShowJobList'
// import ShowJobDetails from './components/ShowJobDetails'
import UpdateJobInfo from './components/UpdateJobInfo'


// let baseURL = ''

// if (process.env.NODE_ENV === 'development') {
//   baseURL = 'http://localhost:3000'
// } else {
  let baseURL = process.env.REACT_APP_BACKEND_URL
// }

// console.log('current base URL:', baseURL)



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
      <Register />
      <JobsApi />
      
      </div>

      // <Router>
      //   <Route exact path='/' component={ShowJobList} />
      //   <Route exact path='/create-job' component={CreateJob}/>
      //   <Route exact path='/show-job/:id' component={ShowJobDetails}/>
      //   <Route exact path='/edit-job/:id' component={UpdateJobInfo}/>
      // </Router>
    )
  }
}




export default App;
