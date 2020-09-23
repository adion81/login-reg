import React from 'react';

const Input = props => {
    const { type, name, label, value, placeholder, handleChange, error} = props;

    
    return (
        <>
            {
                type !== "submit" ?
                <div className="form-group">
                    <label>{label}</label><br></br>
                    <input
                        className="form-control"
                        type={type}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        onChange={(e) => handleChange(e)}
                    /><br></br>
                    <span className="text-danger">{ error ? error.message : "" }</span><br></br> 
                </div>: 
                    
                        <input 
                                type="submit" 
                                value={value} 
                                className="btn btn-primary"
                                
                        />
            }
        </>
    )
}

export default Input;