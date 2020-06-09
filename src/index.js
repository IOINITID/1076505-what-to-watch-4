import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const movieData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`
};

ReactDOM.render(<App movieData={movieData} />, document.querySelector(`#root`));
