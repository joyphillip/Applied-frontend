import React from 'react'
import { useState, useEffect} from "react"
import FormRow from './FormRow'
import Alert from './Alert'

const initialState= {
    name: "",
    password: "", 
    email: "",
    isMember: true,
    showAlert: false,
}

const Register = () => {
    const[values,setValues] = useState(initialState)
    // global state and useNavigate

    const toggleMember= ()=> {
        setValues({...values, isMember:!values.isMember })
    }

    const handleChange = (e) => console.log(e.target);
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target);
    }



  return (
    <div>
        
        <form className= "form-row" onSubmit={onSubmit}>
            <h3>{values.isMember ? "Login" : "Register"}</h3>
            {values.showAlert && <Alert />}
            {!values.isMember && (
            <FormRow 
                type ="text" 
                name="Name" 
                value={values.name} 
                handleChange={handleChange} />)
            }
             <FormRow 
                type ="email" 
                name="Email" 
                value={values.email} 
                handleChange={handleChange} />
            
             <FormRow 
                type ="password" 
                name="Password" 
                value={values.password} 
                handleChange={handleChange} />
            <button type= "submit" className=''>Submit</button>
            <p>
                {values.isMember?"Not a member yet?" : "Already a member?"}
                <button type= "button" onClick={toggleMember} className="">{values.isMember?"Register" : "Login"}</button>
            </p>
        </form>
    </div>
  )
}

export default Register