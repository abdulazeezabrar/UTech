import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import AddCourseForm from './form';
class AddCourse extends Component{
  render(){
    return(
      <div>
        <div className="container">
          <AddCourseForm />
        </div>
      </div>
    );
  };
};

export default reduxForm({
  form: 'AddCourse' // a unique identifier for this form
})(AddCourse)
