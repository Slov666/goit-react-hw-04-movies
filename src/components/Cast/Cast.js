import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import imrURL from '../../constants/constants';
import css from './Cast.module.css';
import imgNotFound from '../../images/imgNotFound.png';
import movieApi from '../../services/movieApi';

const { box, boxCast, img, about } = css;

export default class Cast extends Component {
  state = {
    casts: null,
  };
  componentDidMount() {
    this.fetchCats(this.props.movieId);
  }
  createInfoMovie = items => {
    return items.map(item => {
      return (
        <div className={boxCast} key={uuid()}>
          <p>
            <span className={about}>Name: </span>
            {item.name}
          </p>
          <p>
            {' '}
            <span className={about}>Character: </span>
            {item.character}
          </p>
          <div>
            {item.profile_path ? (
              <img
                className={img}
                src={imrURL + item.profile_path}
                alt={item.name}
              />
            ) : (
              <img className={img} src={imgNotFound} alt={item.name} />
            )}
          </div>
        </div>
      );
    });
  };
  fetchCats = filmID => {
    movieApi
      .fetchCatsFilms(filmID)
      .then(data => this.setState({ casts: data }));
  };
  render() {
    const { casts } = this.state;
    return (
      <div className={box}>{casts && this.createInfoMovie(casts.cast)}</div>
    );
  }
}
Cast.propTypes = {
  movieId: PropTypes.string,
};
