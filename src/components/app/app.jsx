import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const onMovieCardClickHandler = () => {};

const App = (props) => {
  const {movieData, movieTitles} = props;

  return (
    <Main movieData={movieData} movieTitles={movieTitles} onMovieCardClick={onMovieCardClickHandler}/>
  );
};

App.propTypes = {
  movieData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired
  }).isRequired,
  movieTitles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default App;
