import React, { Component } from 'react'
import { connect } from 'react-redux';

class Profile extends Component{

  // TODO: Add the courses to this page and read later lessons
  // TODO: add about page to the insturctors user

  renderUserProfile(){
    if(this.props.user){
      var {firstname, lastname} = this.props.user;
      return(
        <div>
          <p><span className='font-weight-bold'>Name:</span> {`${firstname} ${lastname}`}</p>
        </div>
      );
    } else{
      return (<div>Loding...</div>);
    }
  }

  render(){
    return(
      <div className="container">
        {this.renderUserProfile()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {user: state.authUser};
}

export default  connect(mapStateToProps)(Profile);
