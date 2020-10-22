import React, { Component } from 'react';

import Loader from '../components/Loader/Loader';
import TrendingFilms from '../components/TrendingFilms/TrendingFilms';

import movieApi from '../services/movieApi';

export default class HomePage extends Component {
  state = {
    films: [],
    error: false,
  };
  componentDidMount() {
    this.getTrendsFilms();
  }
  getTrendsFilms = () => {
    movieApi
      .fetchTrendsFilms('day')
      .then(films => this.setState({ films }))
      .catch(() => this.state({ error: true }));
  };

  render() {
    const { films } = this.state;
    return (
      <>
        {films.length > 0 ? (
          <TrendingFilms films={films} trend={'today'} />
        ) : (
          <Loader />
        )}
      </>
    );
  }
}
