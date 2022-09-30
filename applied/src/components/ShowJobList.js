import { render } from "@testing-library/react";
import { Component } from "react";
import JobCard from './JobCard'
import { Link } from "react-router-dom";

class ShowJobList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            job: []
        }
    }
}
render() {
    const job = this.state.job
    let jobList;

    if (!job) {
        jobList = "No Applications have been added!"
    } else {
        jobList = job.map((Jobs, k) =>
        <JobCard Jobs={Jobs} key={k} />
        )
    }
}

return (
    <div className="ShowJobList">
        <div>
            <div>
                <div>
                    <br/>
                    <h1>Applications</h1>
                </div>
                <div>
                    <Link to="/CreateJob">
                        Add an Application!
                    </Link>
                    <br/>
                </div>

            </div>

            <div>
                {jobList}
            </div>

        </div>

    </div>
)

export default ShowJobList