import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import FilmPage from '../components/FilmPage/FilmPage';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';
import Loader from '../components/Loader/Loader';
import NotFound from './NotFound';

import css from './MovieDetailsPage.module.css';
import movieApi from '../services/movieApi';
const { boxForLinks, navLink } = css;

export default class MovieDetailsPage extends Component {
  state = {
    films: null,
    error: null,
  };
  componentDidMount() {
    movieApi
      .fetchDetailsFilms(this.props.match.params.movieId)
      .then(films => {
        this.setState({ films });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    const { films, error } = this.state;
    const { url, params } = this.props.match;
    console.log(this.props.location);
    return (
      <>
        {error ? (
          <NotFound />
        ) : films ? (
          <FilmPage
            films={films}
            location={this.props.location}
            history={this.props.history}
          />
        ) : (
          <Loader />
        )}

        {films && (
          <div className={boxForLinks}>
            <NavLink
              className={navLink}
              to={{ pathname: `${url}/cast`, state: this.props.location.state }}
            >
              Cats
            </NavLink>
            <NavLink
              className={navLink}
              to={{ pathname: `${url}/reviews`, state: this.props.location.state }}
            >
              Reviews
            </NavLink>
          </div>
        )}
        <Switch>
          <Route
            path={`${url}/cast`}
            render={props => <Cast {...props} movieId={params.movieId} />}
          />
          <Route
            path={`${url}/reviews`}
            render={props => <Reviews {...props} movieId={params.movieId} />}
          />
        </Switch>
      </>
    );
  }
}
MovieDetailsPage.propTypes = {
  url: PropTypes.string,
  params: PropTypes.objectOf(PropTypes.string),
  location: PropTypes.object,
  history: PropTypes.object,
};
