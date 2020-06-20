import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const handlerMovieCardClick = () => {};

const App = (props) => {
  const {movieData, films} = props;

  return (
    <Main movieData={movieData} films={films} onMovieCardClick={handlerMovieCardClick}/>
  );
};

App.propTypes = {
  movieData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired
  }).isRequired,
  films: PropTypes.array.isRequired
};

export default App;
