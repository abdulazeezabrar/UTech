import React from 'react';

export default ({input, label, type, maxlength, meta: {error, touched}}) => {
  var ErrorStatment = touched && error;
    return(
      <div className="form-group">
        <label>{label}</label>
        <input
            className={"form-control " + (ErrorStatment && "is-invalid") }
            {...input}
            type={type}
            maxLength={maxlength}
            />
        {ErrorStatment && <div className="invalid-feedback">{error}</div> }
      </div>
    );
}

// TODO: make initil value of simpleInput and draft input
