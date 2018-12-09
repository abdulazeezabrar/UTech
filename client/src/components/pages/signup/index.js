// This page have some dummy logic because its handleAlertError
import React, { Component } from 'react'
import SingupForm from './form';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';


export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      visible: true
    };
  }

  renderAlert(){
    if(this.state.error){
      return(
        <Alert color="danger" isOpen={this.state.visible} toggle={ () => this.setState({visible:false}) } fade={false}>
          {this.state.error}
        </Alert>
      );
    }
    return;
  }

  render() {
    return (
      <div className="container">
        {this.renderAlert()}
        <div className="row">
          <div className="col-lg-6 col-md-8">
          <Link to="/" >Back</Link>
            <h1>Singup</h1>
            <SingupForm handleAlert={(error) => this.setState({error, visible: true})} />
          </div>
        </div>
      </div>
    );
  }
}
