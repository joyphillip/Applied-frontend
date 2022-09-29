import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


// import CreateJob from './components/CreateJob'
// import ShowJobList from './components/ShowJobList'
// import ShowJobDetails from './components/ShowJobDetails'
// import UpdateJobInfo from './components/UpdateJobInfo'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000'
} else {
  baseURL = 'https://applied-backend-22.herokuapp.com'
}

console.log('current base URL:', baseURL)


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: []
    }
  }

  render() {
    return (
      <div className='container'>
      <h1> Welcome to Applied! </h1>
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
