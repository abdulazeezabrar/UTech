import React from 'react';

export default ({input, label, type, meta: {error, touched}}) => {
  if(touched && error){
    return(
      <div className="form-group">
        <label>{label}</label>
        <input className="form-control is-invalid" {...input} type={type}/>
        <div className="invalid-feedback">{error}</div>
      </div>
    );
  } else{
    return(
      <div className="form-group">
        <label>{label}</label>
        <input className="form-control" {...input} type={type}/>
      </div>
    );
  }
}
