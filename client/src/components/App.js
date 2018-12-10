import React, { Component } from 'react';
import Header from './partiles/navbar'
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import { hasRole } from '../utils';
import * as actions from '../actions';

// pages
import signup from './pages/signup';
import login from './pages/login';
import courses from './pages/courses';
import profile from './pages/profile';
import about from './pages/about';
import main from './pages/main';
import instructors from './pages/instructors';



class App extends Component{
  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
    const { user } = this.props;
    const student = hasRole(user, 'student');
    const instructor = hasRole(user, 'instructor');
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={main} />
            <Route path="/about" component={about} />
            <Route path="/courses" exact component={courses} />
            <Route path="/instructors" exact component={instructors} />
            {!user && <Route path="/login" exact component={login} />}
            {!user && <Route path="/signup" exact component={signup} />}
            {user && <Route path="/profile" exact component={profile} />}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {user: state.authUser};
}


export default connect(mapStateToProps , actions)(App);
