import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
class CoursesPage extends React.Component {
  componentDidMount(){
    this.props.getCourses();
  }

  renderCourses(){
    const courses = this.props.courses;
    if(courses === null){
      return <div className="h3">Loading...</div>;
    } else{
       return courses.map( ({title, _id, description}) => {
        return(
          <div className="class-box col-lg-6 mb-4" key={_id}>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{description}</p>
                <Link to={`/courses/${_id}`} className="btn btn-primary">inroll Course</Link>
              </div>
            </div>
          </div>
        )
      });
    }
  }

  render() {
    // TODO: Render the courses
    console.log(this.props.courses);
    return (
      <div className="container Page">
        <div className="tools">
          <Link to="/courses/add">Add</Link>
        </div>
        <br />
        <h1>Courses</h1>
        <div className="row class-boxes">
          {this.renderCourses()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{courses: state.courses}
}

export default connect(mapStateToProps, actions)(CoursesPage);
