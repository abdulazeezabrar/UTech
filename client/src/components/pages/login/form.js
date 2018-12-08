import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as actions from '../../../actions';
import formInput from '../../partiles/formInput';

const FIELDS =[
  {name:"email", label:'Email', type: 'email'},
  {name:"password", label:'Password', type: 'password'}
];

class loginForm extends Component{
  renderFields(){
    return FIELDS.map(({name, label, type}) => {
      return  <Field name={name} label={label} component={formInput} type={type} key={name}/>
    });
  }


  render(){
    const {history, handleAlert} = this.props;
    return (
      <form onSubmit={this.props.handleSubmit( values => this.props.loginUser(values, history, handleAlert) )}>
        {this.renderFields()}
        <div>
          <button type="submit" className="btn btn-primary right">Login !</button>
        </div>
      </form>
    );
  }
}

function validate(values){
  var errors = {};
  // Check the email
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  // make sure the feilds are not empty
  FIELDS.forEach((feild) => {
    if(!values[feild.name]){
      errors[feild.name] = `${feild.label} requierd !`;
    }
  });
  // make sure the password length is greater than 5
  if(values.password && values.password.length < 6){
    errors.password = 'Password length should be 6 or greater'
  }

  return errors;
}

export default reduxForm({
  form: 'signupForm',
  validate
})( withRouter( connect(null, actions)( loginForm )) )
