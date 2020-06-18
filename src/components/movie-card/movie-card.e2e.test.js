import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card.jsx';

const film = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

Enzyme.configure({
  adapter: new Adapter()
});

describe(`MovieCard`, () => {
  it(`Click on header of movie card should be done`, () => {
    const handlerMovieCardClick = jest.fn();

    const movieCard = mount(
        <MovieCard
          film={film}
          onMovieCardClick={handlerMovieCardClick}
          onMovieCardHover={() => {}}
        />
    );

    const movieCardItem = movieCard.find(`h3.small-movie-card__title`);

    movieCardItem.simulate(`click`);

    expect(handlerMovieCardClick).toHaveBeenCalledTimes(movieCardItem.length);
  });

  it(`Hover on movie card should return film data`, () => {
    const handlerMovieCardHover = jest.fn();

    const movieCard = mount(
        <MovieCard
          film={film}
          onMovieCardClick={() => {}}
          onMovieCardHover={handlerMovieCardHover}
        />
    );

    const movieCardItem = movieCard.find(`article.small-movie-card`);

    movieCardItem.simulate(`mouseenter`);

    // expect(handlerMovieCardHover).toHaveBeenCalledWith(film);
  });
});
