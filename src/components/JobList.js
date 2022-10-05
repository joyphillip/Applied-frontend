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

    //   handleUpdateJob = (id) => {
    //     fetch('http://localhost:3000/jobs/' + id, {
    //         method: 'PUT',
    //         body: JSON.stringify({
    //             company: this.state.company,
    //             job: this.state.job,
    //             salary: this.state.salary,
    //             date: this.state.date,
    //             offer: this.state.offer,
    //             notes: this.state.notes
    //         }), 
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }).then (res => res.json())
    //       .then (resJson => {
    //         console.log('UpdatedJob - resJson', resJson)
    //         this.setState({
    //             company: '',
    //             job: '',
    //             salary: '',
    //             date: '',
    //             offer:'',
    //             notes:''
    //         })
    //       })
    // }
      

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
                <th>Offer?</th>
                <th>Notes</th>
                </tr>
                <tbody>
                {this.state.jobs.map(job => {
            return (
              <tr key={job._id}>
                <td> {job.company}</td>
                <td> {job.job}</td>
                <td> {job.salary}</td>
                <td> {job.date} </td>
                <td> {job.offer}</td>
                <td> {job.notes}</td>
                <td onClick={()=> this.handleUpdateJob(job._id)}>
                <button> Update </button> 
                </td>
                <td onClick={()=> this.handleDeleteJob(job._id)}> ❌ </td>
              </tr>
            )
          })}
                </tbody>
            </table>
        )
    }
}

export default JobList