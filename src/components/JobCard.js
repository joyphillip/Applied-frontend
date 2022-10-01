 import React from 'react';
 import { Link } from 'react-router-dom'
 import '../App.css'

 const JobCard = (props) => {
    const job = props.job

    return(
        <div className='card-container'>
            <h2>
                <Link to={`/show-job/${job._id}`}>
                    {job.job}
                </Link>
            </h2>
            <h3>{job.company}</h3>
            <h3>{job.salary}</h3>
            <h3>{job.date}</h3>
            <h3>{job.offer}</h3>
        </div>
    )
 }

 export default JobCard
