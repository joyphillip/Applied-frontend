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



    handleToggleOffer = (job) => {
      fetch('http://localhost:3000/jobs/' + job._id, {
        method: 'PUT',
        body: JSON.stringify({offer: !job.offer}),
        headers: {
          'Content-Type' : 'application/json'
    }
      }).then(res => res.json())
      .then(resJson => {
        console.log('resJson', resJson)
       const copyJobs = [...this.state.jobs]
        const findIndex = this.state.jobs.findIndex((job) => job._id === resJson._id)
        copyJobs[findIndex].offer = resJson.offer
        this.setState({jobs: copyJobs})
      })
    }
      

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
          <div className='jobDiv'>
            <table className='jobForm'>
                <h2> All Jobs </h2>
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
                <button onClick={()=> this.handleToggleOffer(job)}
                className={job.offer ? 'offer' : null}> Received Offer </button> 
                </td>
                <td className='deleteButton' onClick={()=> this.handleDeleteJob(job._id)}> Delete </td>
              </tr>
            )
          })}
                </tbody>
            </table>
          </div>
        )
    }
}

export default JobList