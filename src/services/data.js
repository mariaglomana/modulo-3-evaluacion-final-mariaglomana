const ENDPOINT = 'https://rickandmortyapi.com/api/character/'

const formatAllChars = charItem => {
    return {
        name: charItem.name,
        id: charItem.id,
        image: charItem.image,
        species: charItem.species
    };
};

const getAllCharsFromApi = () => {
    return fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => data.results.map(formatAllChars));
};

const getSelCharFromApi = (id) => {
    return fetch(ENDPOINT + id)
        .then(response => response.json())
};

export { getAllCharsFromApi, getSelCharFromApi };