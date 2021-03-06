import React from 'react';
import rerender from 'react-test-renderer';
import App from './app.jsx';

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

const film = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`,
  cover: `img/bg-the-grand-budapest-hotel.jpg`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  rating: 8.9,
  ratingCount: `240`,
  description: [
    `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
  ],
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`]
};

describe(`App`, () => {
  it(`App component should render correctly`, () => {
    const tree = rerender.create(<App movieData={movieData} films={films} film={film}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
