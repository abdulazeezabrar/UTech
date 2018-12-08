import React, { Component } from 'react';
import Header from './partiles/navbar'
import { connect } from 'react-redux';
import * as actions from '../actions';

import { BrowserRouter, Route } from 'react-router-dom'

// pages
import signup from './pages/signup';
import login from './pages/login';
import courses from './pages/courses';

const main = () => <div>main page</div>;
const about = () => <div>About</div>;
const trainers = () => <div>trainers</div>;


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
            <Route path="/trainers" exact component={trainers} />
            <Route path="/login" exact component={login} />
            <Route path="/signup" exact component={signup} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default connect(null , actions)(App);
