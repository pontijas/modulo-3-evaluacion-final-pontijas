const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character/');
};

export default getDataFromApi;
