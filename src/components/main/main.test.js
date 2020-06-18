import React from 'react';
import rerender from 'react-test-renderer';
import Main from './main.jsx';

const movieData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`,
};

const films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  },
  {
    title: `Bohemian Rhapsody`,
    image: `img/bohemian-rhapsody.jpg`
  },
  {
    title: `Macbeth`,
    image: `img/macbeth.jpg`
  },
  {
    title: `Aviator`,
    image: `img/aviator.jpg`
  },
  {
    title: `We need to talk about Kevin`,
    image: `img/we-need-to-talk-about-kevin.jpg`
  },
  {
    title: `What We Do in the Shadows`,
    image: `img/what-we-do-in-the-shadows.jpg`
  },
  {
    title: `Revenant`,
    image: `img/revenant.jpg`
  },
  {
    title: `Johnny English`,
    image: `img/johnny-english.jpg`
  },
];

describe(`Main`, () => {
  it(`Main component should render correctly`, () => {
    const tree = rerender.create(<Main movieData={movieData} films={films} onMovieCardClick={() => {}}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
