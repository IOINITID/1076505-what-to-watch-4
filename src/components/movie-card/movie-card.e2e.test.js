import React from 'react';
import Enzyme, {shallow} from 'enzyme';
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
  it(`Hover on movie card should return film data`, () => {
    const handlerMovieCardHover = jest.fn();

    const movieCard = shallow(
        <MovieCard
          film={film}
          onMovieCardClick={() => {}}
          onMovieCardHover={handlerMovieCardHover}
        />
    );

    const movieCardItem = movieCard.find(`article.small-movie-card`);

    movieCardItem.simulate(`mouseover`);

    expect(handlerMovieCardHover).toHaveBeenCalledWith(film);
  });
});
