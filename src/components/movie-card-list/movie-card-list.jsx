import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

export default class MovieCardList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovieCard: null
    };

    this._handlerMovieCardHover = this._handlerMovieCardHover.bind(this);
  }

  _handlerMovieCardHover(film) {
    this.setState(() => ({
      activeMovieCard: film
    }));
  }

  render() {
    const {films, onMovieCardClick} = this.props;

    return (
      <div className="catalog__movies-list">

        {films.map((film, index) => {
          const key = `${film.title}-${index}`;

          return (
            <MovieCard
              key={key}
              film={film}
              onMovieCardClick={onMovieCardClick}
              onMovieCardHover={this._handlerMovieCardHover}
            />
          );
        })}

      </div>
    );
  }
}

MovieCardList.propTypes = {
  films: PropTypes.array.isRequired,
  onMovieCardClick: PropTypes.func.isRequired
};
