import React from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import imrURL from '../../constants/constants';
import routes from '../../routes';
import css from '../../components/FilmPage/FilmPage.module.css';
const { goBack, infoBox, title, backgoundIMG, posterNotFound } = css;

function FilmPage({ films, location, history }) {
  const backgroundStyle = {
    height: '100vh',
    width: '100%',
    background: `url(${imrURL + films.poster_path})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
  };
  const createInfoMovie = items => {
    return items.map(item => {
      return <li key={uuid()}>{item.name}</li>;
    });
  };
  const onGoBack = () => {
    const { state } = location;
    if (state && state.from) {
      history.push(state.from);
      return;
    }
    history.push(routes.home);
  };
  return (
    <>
      {films.poster_path ? (
        <div className={backgoundIMG} style={{ ...backgroundStyle }}>
          <button className={goBack} type="button" onClick={onGoBack}></button>
        </div>
      ) : (
        <>
          <p className={posterNotFound}>Poster not found</p>
          <button className={goBack} type="button" onClick={onGoBack}></button>
        </>
      )}
      <div className={infoBox}>
        <h2 className={title}>
          {films.title ? films.title : films.original_title}
        </h2>
        <p>Votes: {films.vote_average}</p>
        <ul>
          Genres:
          {films.genres.length !== 0
            ? createInfoMovie(films.genres)
            : `not found`}
          <p>
            <b>Overview:</b> {films.overview}
          </p>
        </ul>
      </div>
    </>
  );
}
export default FilmPage;
FilmPage.propTypes = {
  films: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object,
};
