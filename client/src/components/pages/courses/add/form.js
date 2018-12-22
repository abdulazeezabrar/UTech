import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as actions from '../../../../actions';
import formInput from './../../../partiles/formInput';

const FIELDS =[
  {name:"title", label:'Title', type: 'text'},
  {name:"aboutPage", label:'About Course', type: 'draftEditor'},
  {name:'description', label:'small Description', type:'text', maxlength:"200"}
];

class addCourseForm extends Component{
  renderFields(){
    return FIELDS.map( props => {
      return  <Field {...props} component={formInput} key={props.name}/>
    });
  }


  render(){
    const {history, handleAlert} = this.props;
    return (
      <form onSubmit={this.props.handleSubmit( values => this.props.CreateCourse(values, history) )}>
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
  // make sure the feilds are not empty
  FIELDS.forEach((feild) => {
    if(!values[feild.name]){
      errors[feild.name] = `${feild.label} requierd !`;
    }
  });
  // make sure the password length is greater than 5
  if(values.description > 200){
    errors.description = 'Description should be shorter than 200 chareters';
  }
  if(values.title < 6){
    errors.title = 'title length should be 6 or greater'
  }

  return errors;
}

export default reduxForm({
  form: 'AddCourse',
  validate,
})( withRouter( connect(null, actions)( addCourseForm )) )
