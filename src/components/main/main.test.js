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
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    videoSource: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  }
];

describe(`Main`, () => {
  it(`Main component should render correctly`, () => {
    const tree = rerender.create(<Main movieData={movieData} films={films} onMovieCardClick={() => {}}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
