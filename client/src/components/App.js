import React from 'react';
import Header from './partiles/navbar'

import { BrowserRouter, Route, Link } from 'react-router-dom'

const main = () => <div>main page</div>;
const about = () => <div>About</div>;
const courses = () => <div>courses</div>;
const trainers = () => <div>trainers</div>;
const login = () => <div>trainers</div>;
const signup = () => <div>trainers</div>;


export default (props) => {
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
            <Route path="/signup" exact component={trainers} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
