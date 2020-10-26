import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../../routes';

import Loader from '../Loader/Loader';
import Layout from '../Layout/Layout';
import Navigation from '../Navigation/Navigation';


const Home = lazy(() =>
  import('../../Views/HomePage' /* webpackChunkName: "Home" */));
const MoviesPage = lazy(() =>
  import('../../Views/MoviesPage' /* webpackChunkName: "MoviesPage" */));
const MovieDetailsPage = lazy(() =>
  import('../../Views/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */));

export default class App extends Component {
  state = {};


  render() {
    const { home, movies, moviesID } = routes;
    return (
      <Layout>
        <Navigation />
        <Suspense fallback={<Loader/>}>
          <Switch>
            <Route path={home} exact component={Home} />
            <Route path={movies} exact component={MoviesPage} />
            <Route path={moviesID} component={MovieDetailsPage} />
            <Redirect to={home} />
          </Switch>
        </Suspense>
      </Layout>
    );
  }
}
