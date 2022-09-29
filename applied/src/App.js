import { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


import CreateJob from './components/CreateJob'
import ShowJobList from './components/ShowJobList'
import ShowJobDetails from './components/ShowJobDetails'
import UpdateJobInfo from './components/UpdateJobInfo'

class App extends Component{
  render() {
    return (
      <Router>
        <Route exact path='/' component={ShowJobList} />
        <Route exact path='/create-job' component={CreateJob}/>
        <Route exact path='/show-job/:id' component={ShowJobDetails}/>
        <Route exact path='/edit-job/:id' component={UpdateJobInfo}/>
      </Router>
    )
  }
}




export default App;
