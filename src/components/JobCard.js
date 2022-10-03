
// ***************************************************
// import React, { Component } from "react";
// import { ReactDOM } from "react-dom";

// let baseURL = process.env.REACT_APP_BACKEND_URL

// class JobCard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             company: '',
//             job: '',
//             date: '',
//             salary: '',
//             offer: Boolean
//         }
//     }

//     componentDidMount() {
//         fetch('http://localhost:3000/jobs', {
//             method: 'GET',
//             body: JSON.stringify({company: this.state.company}),
//             header: {
//                 'Content-type': 'application/json'
//             }
//         }) .then(res => res.json())
//             .then(resJson => {
//                 console.log (resJson)
//                 this.setState({company: ''})
//             })          
//     }

//     // componentDidMount(){
//     //     this.getJobs()
//     //   }
    
//     //   getJobs = () => {
//     //     fetch(baseURL + '/jobs')
//     //     .then((res) => {
//     //       if (res.status === 200) {
//     //         return res.json();
//     //       } else {
//     //         return [];
//     //       }
//     //     })
//     //     .then((data) => {
//     //       console.log(data);
//     //       this.setState({jobs: data.jobs})
//     //     })
//     //   }


//     render() {
//         return (
//             <div className="Job-card">
//                 <p>Company: {this.state.company}</p>
//             </div>
//         )
//     }
// }

// export default JobCard
import React from "react";
import CreateJob from "./CreateJob";
