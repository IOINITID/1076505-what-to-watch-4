import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Main`, () => {
  it(`Click on header or image of movie card should be done`, () => {
    const handleMovieCardClick = jest.fn();

    const main = mount(
        <Main movieData={movieData} films={films} onMovieCardClick={handleMovieCardClick}/>
    );

    const movieCardLinks = main.find(`a.small-movie-card__link`);
    const movieCardImages = main.find(`div.small-movie-card__image`);

    movieCardLinks.forEach((link) => {
      link.simulate(`click`, {preventDefault() {}});
    });

    movieCardImages.forEach((image) => {
      image.simulate(`click`);
    });

    expect(handleMovieCardClick).toHaveBeenCalledTimes(movieCardLinks.length + movieCardImages.length);
  });
});
