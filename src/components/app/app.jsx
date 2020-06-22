import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MovieDetails from '../movie-details/movie-details.jsx';
import {PageNames} from '../../const.js';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      page: PageNames.MAIN
    };

    this.handleMovieCardClick = this.handleMovieCardClick.bind(this);
  }

  handleMovieCardClick(evt) {
    evt.preventDefault();

    this.setState({
      page: PageNames.MOVIE_DETAILS
    });
  }

  renderApp() {
    const {movieData, films, film} = this.props;
    const {page} = this.state;

    switch (page) {
      case PageNames.MAIN:
        return (
          <Main movieData={movieData} films={films} onMovieCardClick={this.handleMovieCardClick}/>
        );
      case PageNames.MOVIE_DETAILS:
        return (
          <MovieDetails film={film}/>
        );
      default:
        return null;
    }
  }

  render() {
    const {film} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.renderApp()}
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
  films: PropTypes.array.isRequired,
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingCount: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired
  }).isRequired
};
