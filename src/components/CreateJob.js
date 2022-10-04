import React, { Component } from "react";
import '../App.css'

class CreateJob extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            company: '',
            job: '',
            salary: '',
            date: '',
            offer:'',
            notes:''
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    onSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/jobs', {
            method: 'POST',
            body: JSON.stringify({
                company: this.state.company,
                job: this.state.job,
                salary: this.state.salary,
                date: this.state.date,
                offer: this.state.offer,
                notes: this.state.notes
            }), 
            headers: {
                'Content-Type': 'application/json'
            }
        }).then (res => res.json())
          .then (resJson => {
            console.log('NewJob - resJson', resJson)
            this.props.handleAddJob(resJson)
            this.setState({
                company: '',
                job: '',
                salary: '',
                date: '',
                offer:'',
                notes:''
            })
          })
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <label htmlFor="company"></label>
                <input type="text" id="company" name="company" onChange={this.onChange} value={this.state.company} placeholder="Company Name?"/>
                <label htmlFor="job"></label>
                <input type="text" id="job" name="job" onChange={this.onChange} value={this.state.job} placeholder="Job Title?"/>
                <label htmlFor="salary"></label>
                <input type="text" id="salary" name="salary" onChange={this.onChange} value={this.state.salary} placeholder="Salary!"/>
                <label htmlFor="date"></label>
                <input type="text" id="date" name="date" onChange={this.onChange} value={this.state.date} placeholder="Date Applied?"/>
                <label htmlFor="offer">Offer?</label>
                <input type="text" id="offer" name="offer" onChange={this.onChange} value={this.state.offer} placeholder="Y/N"/>
                <label htmlFor="notes"></label>
                <input type="text" id="notes" name="notes" onChange={this.onChange} value={this.state.notes} placeholder="Add Notes!"/>
                <input type="submit" value="Add a New Job"/>
            </form>
        )
    }
}
export default CreateJob