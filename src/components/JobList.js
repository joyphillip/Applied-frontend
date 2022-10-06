import React, { Component } from 'react'

class JobList extends Component {
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
        fetch('http://localhost:3000/jobs')
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


  handleEditJobs = (job) => {
    fetch('http://localhost:3000/jobs/' + job._id, {
        method: 'PUT',
        body: JSON.stringify({
            company: job.company,
            job: job.job,
            salary: job.salary,
            date: job.date,
            notes: job.notes
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => res.json())
    .then((resJson) => {
        // console.log(resJson)
        const copyJobs = [...this.state.jobs];
        const findIndex = this.state.jobs.findIndex(
            (job) => job._id === resJson._id
        );
        copyJobs[findIndex] = resJson
        this.setState({
            jobs: copyJobs,
        });
    });
};
      

      handleDeleteJob = (id) => {
        fetch('http://localhost:3000/jobs/' + id, {
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
            <table>
                <caption> All Jobs </caption>
                <tr>
                <th>Company</th>
                <th>Job Title</th>
                <th>Salary</th>
                <th>Date</th>
                <th>Notes</th>
                <th>Offer?</th>
                </tr>
                <tbody>
                {this.state.jobs.map(job => {
            return (
              <tr key={job._id}>
                <td> {job.company}</td>
                <td> {job.job}</td>
                <td> {job.salary}</td>
                <td> {job.date} </td>
                <td> {job.notes}</td>
                <td>
                  <td>
                
                  </td>
                <button 
                onClick={()=> this.handleToggleOffer(job)}
                className={job._id ? 'offer' : null}> Received Offer </button> 
                </td>
                <td onClick={()=> this.handleDeleteJob(job._id)}> ❌ </td>
                <td>
                  
                </td>
      
              </tr>
            )
          })}
                </tbody>
            </table>
        )
    }
}

export default JobList