import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MovieDetails from '../movie-details/movie-details.jsx';
import film from '../../mocks/film.js';

const handlerMovieCardClick = () => {};

export default class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movieData, films} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main movieData={movieData} films={films} onMovieCardClick={handlerMovieCardClick}/>
          </Route>
          <Route exact path="/dev-film">
            <MovieDetails film={film}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  movieData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired
  }).isRequired,
  films: PropTypes.array.isRequired
};
