import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as actions from '../../../actions';
import formInput from '../../partiles/formInput';

const FIELDS =[
  {name:"firstname", label:'First Name', type: 'text'},
  {name:"lastname", label:'Last Name', type: 'text'},
  {name:"email", label:'Email', type: 'email'},
  {name:"password", label:'Password', type: 'password'},
  {name:"password2", label:'Confirm Password', type: 'password'}
];

class SignupForm extends Component{
  renderFields(){
    return FIELDS.map(({name, label, type}) => {
      return  <Field name={name} label={label} component={formInput} type={type} key={name}/>
    });
  }


  render(){
    const {history, handleAlert} = this.props;
    return (
      <form onSubmit={this.props.handleSubmit( values => this.props.signupUser(values, history, handleAlert) )}>
        {this.renderFields()}
        <div>
          {/* Radio buttons */}
          <div>
            <label>Type</label>
            <div>
              <label>
                <Field name="type" component="input" type="radio" value="student" />{' '} Student
              </label>
              <label className="d-block">
                <Field name="type" component="input" type="radio" value="instructor" />{' '} Instructor
              </label>
            </div>
          </div>
          {/* End Radio buttons */}
          <button type="submit" className="btn btn-primary right">Signup !</button>
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
  // make sure that the both passwords are match
  if(values.password !== values.password2){
    errors.password2 = "passwords are not matched";
  }
  // make sure the password length is greater than 5
  if(values.password && values.password.length < 6){
    errors.password = 'Password length should be 6 or greater'
  }

  return errors;
}

export default reduxForm({
  form: 'signupForm',
  validate,
  initialValues: {type: 'student'}
})( withRouter( connect(null, actions)( SignupForm )) )
