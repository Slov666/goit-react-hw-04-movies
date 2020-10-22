import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';
import css from './NotFound.module.css';
const { box, navLink, notFound } = css;

export default class NotFound extends Component {
  render() {
    return (
      <div className={box}>
        <p className={notFound}>404 Page Not Found</p>
        <NavLink className={navLink} to={routes.home}>Click to home page</NavLink>
      </div>
    );
  }
}
