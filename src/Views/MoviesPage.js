import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Searchbox from '../components/Searchbox/Searchbox';
import TrendingFilms from '../components/TrendingFilms/TrendingFilms';
import Loader from '../components/Loader/Loader';
import NotFound from './NotFound';

import getQueryParams from '../utils/queryString';
import movieApi from '../services/movieApi';

export default class MoviesPage extends Component {
  state = {
    films: null,
    error: false,
  };
  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      this.fetchSearch(query);
      return;
    }
    movieApi.fetchTrendsFilms('week').then(films => this.setState({ films }));
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);
    if (prevQuery !== nextQuery) {
      return this.fetchSearch(nextQuery);
    }
  }
  fetchSearch = query => {
    movieApi
      .fetchSearchFilms(query)
      .then(films => this.setState({ films: films }))
      .catch(() => this.setState({ error: true }));
  };
  onSubmit = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { films, error } = this.state;
    const { location } = this.props;
    return (
      <>
        <Searchbox onSubmit={this.onSubmit} />
        {error ? (
          <NotFound />
        ) : films ? (
          <TrendingFilms
            films={films}
            trend={'week'}
            locationMoviesPage={location}
          />
        ) : (
          <Loader />
        )}
      </>
    );
  }
}
MoviesPage.propTypes = {
  search: PropTypes.string,
  location: PropTypes.object,
};
