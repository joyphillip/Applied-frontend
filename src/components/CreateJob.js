import { format } from "path";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../App.css'

class CreateJob extends Component {
    constructor() {
        super();
        this.state = {
            company: '',
            job: '',
            salary: '',
            date: '',
            offer:'',
            notes:''
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    onSubmit = (e) => {
        e.preventDefault()
        fetch(baseURL + '/jobs', {
            method: 'POST',
            body: JSON.stringify({
                company: this.state.company,
                job: this.state.job,
                salary: this.state.salary,
                date: this.state.date,
                offer: this.state.date,
                notes: this.state.notes
            }), 
            headers: {
                'Content-Type': 'application/json'
            }
        }).then (res => res.json())
          .then (resJson => {
            this.setState({
                company: '',
                job: '',
                salary: '',
                date: '',
                offer:'',
                notes:''
            })
          })
        // const data = {
        //     company: this.state.company,
        //     job: this.state.job,
        //     salary: this.state.salary,
        //     date: this.state.date,
        //     offer: this.state.date,
        //     notes: this.state.notes
        // }

    }
    render(){
        return (
            <form>
                <label htmlFor="company"></label>
                <input type="text" id="company" name="company" onChange={this.onChange} value={this.state.company} placeholder="Company Name?"/>
                <label htmlFor="job"></label>
                <input type="text" id="job" name="job" onChange={this.onChange} value={this.state.job} placeholder="Job Title?"/>
                <label htmlFor="salary"></label>
                <input type="text" id="salary" name="salary" onChange={this.onChange} value={this.state.salary} placeholder="Salary!"/>
                <label htmlFor="date"></label>
                <input type="text" id="date" name="date" onChange={this.onChange} value={this.state.date} placeholder="Date Applied?"/>
                <label htmlFor="offer"></label>
                <input type="text" id="offer" name="offer" onChange={this.onChange} value={this.state.offer} placeholder="Did You Recieve an Offer Yet?"/>
                <label htmlFor="notes"></label>
                <input type="text" id="notes" name="notes" onChange={this.onChange} value={this.state.notes} placeholder="Add Notes!"/>
            </form>
        )
    }
}
export default CreateJob