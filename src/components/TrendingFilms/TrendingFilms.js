import React from 'react';
import PropTypes from 'prop-types';
import css from './TrendingFilms.module.css';
import imrURL from '../../constants/constants';
import imgNotFound from '../../images/imgNotFound.png';
import routes from '../../routes';

import { NavLink } from 'react-router-dom';

const {
  title,
  img,
  list,
  box,
  navLink,
  nameAndStars,
  nameAndStarsBox,
  stars,
} = css;

export default function TrendingFilms({ films, trend, locationMoviesPage }) {
  return (
    <div className={box}>
      <h2 className={title}>Trending {trend}</h2>
      <ul className={list}>
        {films.map(film => {
          return (
            <NavLink
              className={navLink}
              key={film.id}
              to={{
                pathname: `${routes.movies}/${film.id}`,
                state: { from: locationMoviesPage },
              }}
            >
              {film.poster_path ? (
                <img
                  className={img}
                  alt={film.name}
                  src={imrURL + film.poster_path}
                />
              ) : (
                <img className={img} src={imgNotFound} alt="not found" />
              )}
              <div className={nameAndStarsBox}>
                <p className={nameAndStars}>
                  {film.name ? film.name : film.original_title}
                </p>
                <p className={nameAndStars}>
                  <span className={stars}>Stars</span> {film.vote_average}
                </p>
              </div>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}
TrendingFilms.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
  locationMoviesPage: PropTypes.object,
  trend: PropTypes.string,
};
