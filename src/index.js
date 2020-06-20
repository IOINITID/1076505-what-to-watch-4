import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import films from './mocks/films.js';

const movieData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`,
};

ReactDOM.render(
    <App
      movieData={movieData}
      films={films}
    />, document.querySelector(`#root`));
