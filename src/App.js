import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
// import Register from './Nav/Register';
import JobsApi from "./api/JobsApi"
import Nav from './Nav/Nav';



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

  loginUser = (e) => {
    e.preventDefault()
    fetch(baseURL + '/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "include"
    }).then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      this.getJobs()
    })
  }

  register = (e) => {
    e.preventDefault()
    fetch(baseURL + '/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      this.getJobs()
    })
  }


  getJobs = () => {
    fetch(baseURL + '/jobs', {
      credentials: "include"
    })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return [];
      }
    })
    .then((data) => {
      console.log(data);
      if (data === []) {
        this.setState({ jobs: data})
      } else {
        this.setState({ jobs: data.jobs });
      }
    })
  }




  render() {
    return (
      <div className='container'>
      <h1> Welcome to Applied! </h1>
      <Nav loginUser={this.loginUser} register={this.register}/>
      {/* <JobsApi /> */}

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
