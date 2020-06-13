import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

const movieData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`,
};

const movieTitles = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Midnight Special`
];

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Main`, () => {
  it(`Click on header should be done`, () => {
    const onMovieCardClick = jest.fn();

    const main = shallow(
        <Main movieData={movieData} movieTitles={movieTitles} onMovieCardClick={onMovieCardClick}/>
    );

    const movieCardTitles = main.find(`h3.small-movie-card__title`);

    movieCardTitles.forEach((title) => {
      title.simulate(`click`);
    });

    expect(onMovieCardClick).toHaveBeenCalledTimes(movieTitles.length);
  });
});
