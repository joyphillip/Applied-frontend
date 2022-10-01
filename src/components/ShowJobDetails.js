import { Component } from "react";
import { Link } from 'react-router-dom';
import '../App.css';
import ShowJobList from "./ShowJobList";

class ShowJobDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            job: {}
        }
    }
    //Delete Function goes HERE
    render() {
        const job = this.state.job
        let jobItem = <div>
            <table>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Company</td>
                        <td>{ Jobs.company }</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Job</td>
                        <td>{ Jobs.job }</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Salary</td>
                        <td>{ Jobs.salary }</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Date</td>
                        <td>{ Jobs.date }</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Offer</td>
                        <td>{ Jobs.offer }</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Notes</td>
                        <td>{ Jobs.notes }</td>
                    </tr>
                </tbody>
            </table>
        </div>

        return (
            <div>
                <div>
                    <div>
                        <div>
                            <br/>
                            <Link to="/">
                                Show Applications
                            </Link>
                        </div>
                        <br/>
                        <div>
                            <h1>Application information</h1>    
                            <p>
                                View Application's Info 
                            </p>
                            <br/>
                        </div>
                    </div>
                    <div>
                        { jobItem }
                    </div>

                    <div>
                        <div>
                            <button type="button" onClick={this}>Delete</button>
                            <br/>
                        </div>

                        <div>
                            <Link to={`/edit-job/${Jobs._id}`}>Edit Application</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ShowJobDetails 