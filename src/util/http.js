export const fetchMovies = async ({signal, id,  searchPhrase}) => {
  let url = 'http://www.omdbapi.com/?apikey=ecc961c8';

  console.log(signal);

  if (searchPhrase){
    url += `&s=${searchPhrase}`
  }
  const response = await fetch (url);

  if(!response.ok){
    return new Error('Error', response.info ? response.info.message : 'An error occured while fetching the movie list.')
  }
  const result = await response.json();
  return result.Search;
}

export const fetchMovie = async ({signal, id}) => {
  let url = 'http://www.omdbapi.com/?apikey=ecc961c8&plot=full';

  if (id){
    url += `&i=${id}`
  }

  const response = await fetch (url);

  if(!response.ok){
    return new Error('Error', response.info ? response.info.message : 'An error occured while fetching a movie.')
  }
  const result = await response.json();
  return result;
}