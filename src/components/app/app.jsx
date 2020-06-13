import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = (props) => {
  const {movieData, movieTitles, onMovieCardClick} = props;

  return (
    <Main movieData={movieData} movieTitles={movieTitles} onMovieCardClick={onMovieCardClick}/>
  );
};

App.propTypes = {
  movieData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired
  }).isRequired,
  movieTitles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onMovieCardClick: PropTypes.func.isRequired
};

export default App;
