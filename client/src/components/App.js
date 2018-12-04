import React from 'react';
import Header from './partiles/navbar'

import { BrowserRouter, Route, Link } from 'react-router-dom'

const main = () => <div>main page</div>;
const about = () => <div>About</div>;
const courses = () => <div>courses</div>;
const trainers = () => <div>trainers</div>;


export default (props) => {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={main} />
            <Route path="/about" exact component={about} />
            <Route path="/courses" exact component={courses} />
            <Route path="/trainers" component={trainers} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
