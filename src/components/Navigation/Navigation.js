import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import css from './Navigation.module.css';
const { home, movies } = routes;
const { link, activeLink, ul, li, backgroundHeader } = css;

export default function Navigation() {
  return (
    <header className={backgroundHeader}>
      <ul className={ul}>
        <li className={li}>
          <NavLink
            exact
            activeClassName={activeLink}
            className={link}
            to={home}
          >
            Home
          </NavLink>
        </li>
        <li className={li}>
          <NavLink activeClassName={activeLink} className={link} to={movies}>
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
