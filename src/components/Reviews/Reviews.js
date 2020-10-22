import React, { Component } from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import noData from '../../images/noData.png';
import css from './Reviews.module.css';
import movieApi from '../../services/movieApi';
const { box, FW } = css;
export default class Reviews extends Component {
  state = {
    reviews: null,
  };
  componentDidMount() {
    this.fetchCats(this.props.movieId);
  }
  createInfoMovie = items => {
    return items.map(item => {
      return (
        <div key={uuid()}>
          <p>
            <span className={FW}> Author :</span>
            {item.author}
          </p>
          <p>
            <span className={FW}>Content: </span>
            {item.content}
          </p>
        </div>
      );
    });
  };
  fetchCats = filmID => {
    movieApi
      .fetchReviewsFilms(filmID)
      .then(data => this.setState({ reviews: data }));
  };
  render() {
    const { reviews } = this.state;
    return (
      <div className={box}>
        {reviews ? this.createInfoMovie(reviews) : (<img src={noData} alt="Oops, reviews not found"/>)}
      </div>
    );
  }
}
Reviews.propTypes = {
  movieId: PropTypes.string,
};
