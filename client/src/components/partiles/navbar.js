import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  renderUser(){
    switch (this.props.user) {
      case null:
        return;
      case false:
        return(
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/login" className="nav-link" activeClassName="active" >login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signup" className="nav-link" activeClassName="active" >signup</NavLink>
            </NavItem>
          </Nav>
        );
      default:
        return (
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {this.props.user.firstname}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  setings
                </DropdownItem>
                <DropdownItem>
                  profile
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        );
    }
  }

  render() {
    return (
      <div>
        <Navbar className="mb-3" color="dark" dark expand="md">
          <div  className="container">
            <Link className="navbar-brand" to="/">UTech</Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink to="/courses" className="nav-link" activeClassName="active" >Courses</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/trainers" className="nav-link" activeClassName="active" >Trainers</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/about" className="nav-link" activeClassName="active" >About</NavLink>
                </NavItem>
              </Nav>
              {this.renderUser()}
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {user: state.authUser};
}

export default withRouter(connect(mapStateToProps)(Header) );
