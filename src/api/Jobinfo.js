import React, { Component } from 'react'

class Jobinfo extends Component {
  render() {
    
    return (
      <div>
         
         <div>
             {/* <h1>Total Results: {this.props.companyName.count}</h1> */}
       
             <h1>Job Type: {this.props.companyName.results[0].category.label}</h1>
        
             <p>{this.props.companyName.results[0].description}</p>
        
             <p>Company name: {this.props.companyName.results[0].company.display_name}</p>

             <p>Location: {this.props.companyName.results[0].location.display_name}</p>

             <p>Company url: {this.props.companyName.results[0].redirect_url}  </p> 

             <p>Job Title: {this.props.companyName.results[0].title}</p> 
             </div>
             <br></br>
             <div>
        
             <h1>Job Type: {this.props.companyName.results[1].category.label}</h1>
             <br></br>
             <p>  {this.props.companyName.results[1].description}</p>
                <br></br>
             <p>Company name: {this.props.companyName.results[1].company.display_name}</p>

             <p>Location: {this.props.companyName.results[1].location.display_name}</p>

             <p>Company url: {this.props.companyName.results[1].redirect_url}</p>

             <p>Job Title: {this.props.companyName.results[1].title}</p> 
             </div>
                <br></br>
             <div>
        
             <h1>Job Type: {this.props.companyName.results[2].category.label}</h1>
             <br></br>
             <p>Job  {this.props.companyName.results[2].description}</p>
             <br></br>
             <p>Company name: {this.props.companyName.results[2].company.display_name}</p>

             <p>Location: {this.props.companyName.results[2].location.display_name}</p>

             <p>Company url: {this.props.companyName.results[2].redirect_url}</p>

             <p>Job Title: {this.props.companyName.results[2].title}</p> 
             </div>
                <br></br>
             <div>
            
                <h1>Job Type: {this.props.companyName.results[3].category.label}</h1>
                <br></br>
                <p>  {this.props.companyName.results[3].description}</p>
                <br></br>
                <p>Company name: {this.props.companyName.results[3].company.display_name}</p>

                <p>Location: {this.props.companyName.results[3].location.display_name}</p>

                <p>Company url: {this.props.companyName.results[3].redirect_url}</p>

                <p>Job Title: {this.props.companyName.results[3].title}</p> 
                </div>
                    <br></br>
                <div>
                
                <h1>Job Type: {this.props.companyName.results[4].category.label}</h1>
                <br></br>
                <p>  {this.props.companyName.results[4].description}</p>
                <br></br>
                <p>Company name: {this.props.companyName.results[4].company.display_name}</p>

                <p>Location: {this.props.companyName.results[4].location.display_name}</p>

                <p>Company url: {this.props.companyName.results[4].redirect_url}</p>

                <p>Job Title: {this.props.companyName.results[4].title}</p> 
                </div>

        
      </div>
      
    )
    
  }
  
}


export default Jobinfo