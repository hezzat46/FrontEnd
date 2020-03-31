/* eslint-disable react/button-has-type */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import "./WebPlayerHomeComponent.css";
import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";
import { NavLink, Link, Redirect, Switch, Route} from "react-router-dom";
import HomeNavAndContentSigned from './HomeNavAndContentSigned'


class WebPlayerHome extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      tempId: this.props.id.id,
    };
  }

 
  render() {
    const isSignedIn = this.props.data.data.map((data) => {
        if (data.id === this.state.tempId) {
          return (
            <div>
             <HomeNavAndContentSigned
                data={this.props.data} 
                id={this.props.id}
            /> 
            </div>
          );
        }
      });
    return (
      <div>
        <div className="WebPlayerHomeBody">
            <div className="container InfoContainer">
                <div className="row InfoContainerRow">
                    <div className="col-md-4 col-lg-3 Linkers">
                        <div className="sidebar">
                        <Link to="/home" className="AppearBigImage">
                            <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBmnPgQKW4JLrNcSFhPFCLHz3t8kT1pZl0PVkLYsa8FoScWYda"
                            height="50px"
                            width="160px"
                            alt=""
                            />
                        </Link>
                        <Link to="/webplayer/home"  className="active">
                            <i className="fa fa-home" />
                            Home
                        </Link>
                        <Link to="/webplayer/search">
                            <i className="fa fa-search"></i>
                            Search
                        </Link>
                        <Link to="/webplayer/library">
                            <i className="fa fa-bomb"></i>
                            Your Library
                        </Link>
                        <h3 className="sidebarHeaderBetween">PLAYLISTS</h3>
                        <Link to="/" >
                            <i className="fa fa-plus-square"></i>
                            Create Playlist
                        </Link>
                        <Link to="/" >
                            <i className="fa fa-heart"></i>
                            Liked Songs
                        </Link>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-9 webPlayerHomeNavAndContent">
                        {isSignedIn}
                    </div>
                </div>
            </div>
        </div>
        <div className="AccountOverviewFooter">
          <div className="container">
           
          </div>
        </div>
    </div>
    );
  }
}

export default WebPlayerHome;
