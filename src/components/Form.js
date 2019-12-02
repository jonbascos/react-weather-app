import React from 'react'

function Form(props) {
    return(
        <div className="form-group">
            <form onSubmit={props.loadweather}>
                <div className="form-row align-items-center">
                    <div className="col-auto">
                        <input 
                            type='text' 
                            name='city'
                            className="form-control" 
                            placeholder='City' 
                            onChange={props.change}
                        />
                        <input 
                            type='text' 
                            name='country'
                            className="form-control" 
                            placeholder='Country' 
                            onChange={props.change}
                        />
                        <button className="btn btn-primary"  >Get Weather</button>
                    </div>
                </div>
                
            </form>
            
            
        </div>
    )
}

export default Form