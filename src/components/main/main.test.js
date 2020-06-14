import React from 'react';
import rerender from 'react-test-renderer';
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

describe(`Main`, () => {
  it(`Main component should render correctly`, () => {
    const tree = rerender.create(<Main movieData={movieData} movieTitles={movieTitles} onMovieCardClick={() => {}}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
