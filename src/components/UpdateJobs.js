import React, {Component} from 'react'


class UpdateJobs extends Component {
    constructor(props){
        super(props)
        this.state = {     
            name: '', //originally had this as empty string but changed to prop to pass to current value???
            imgURL: '',
            description: '',
            type: '',
            price: ''
        }
    }

    // call this function on every keystroke
    handleChange = (e) => {
        this.setState({
            //grabs all details dynamically in this.state using e.target
            [e.target.id]: e.target.value
        })
    }



    render() {
        return (
            <>
            <h1>Edit Product</h1>

            <form onSubmit={this.props.handleEditProduct} className='EditForm' >

                <input 
                    id='name'
                    type='text' 
                    onChange={this.handleChange}

                    value={this.props.name}

                    placeholder='Edit Product Name'
                    className='editProductInput'
                />
                <input 
                    id='imgURL'
                    type='text' 
                    onChange={this.handleChange}

                    value={this.props.imgURL}

                    placeholder='edit image'
                    className='editProductInput'
                />
                <input 
                    id='description'
                    type='text' 
                    onChange={this.handleChange}

                    value={this.props.description}

                    placeholder='edit description'
                    className='editProductInput'
                />
                <input 
                    id='type'
                    type='text' 
                    onChange={this.handleChange}

                    value={this.props.type}

                    placeholder=' edit type'
                    className='editProductInput'
                />
                <input 
                    id='price'
                    type='text' 
                    onChange={this.handleChange}

                    value={this.props.price}

                    placeholder='edit price'
                    className='editProductInput'
                />
                
               <input type="submit" value="Edit Product" />
            </form>
            </>
        )
    }
}

export default UpdateJobs