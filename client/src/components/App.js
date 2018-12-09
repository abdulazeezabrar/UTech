import React, { Component } from 'react';
import Header from './partiles/navbar'
import { connect } from 'react-redux';
import * as actions from '../actions';

import { BrowserRouter, Route } from 'react-router-dom'

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
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={main} />
            <Route path="/about" component={about} />
            <Route path="/courses" exact component={courses} />
            <Route path="/instructors" exact component={instructors} />
            <Route path="/login" exact component={login} />
            <Route path="/signup" exact component={signup} />
            <Route path="/profile" exact component={profile} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default connect(null , actions)(App);
