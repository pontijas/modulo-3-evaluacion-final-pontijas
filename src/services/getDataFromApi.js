const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          name: character.name,
          image: character.image,
          species: character.species,
        };
      });
    });
};

export default getDataFromApi;
