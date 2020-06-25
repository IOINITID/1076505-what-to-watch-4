import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

export default class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isVideoPlaying: false
    };
  }

  render() {
    const {film, onMovieCardClick, onMovieCardHover} = this.props;
    const {title, image} = film;
    const {isVideoPlaying} = this.state;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseOver={() => {
          onMovieCardHover(film);
          this.setState({
            isVideoPlaying: true
          });
        }}
        onMouseOut={() => {
          this.setState({
            isVideoPlaying: false
          });
        }}
      >
        <div className="small-movie-card__image" onClick={onMovieCardClick}>
          <VideoPlayer
            film={film}
            isPlaying={isVideoPlaying}
          />
          <img src={image} alt={title} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title" onClick={onMovieCardClick}>
          <a className="small-movie-card__link" href="movie-page.html">{title}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    videoSource: PropTypes.string.isRequired
  }).isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
  onMovieCardHover: PropTypes.func.isRequired
};
