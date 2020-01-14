const ENDPOINT = 'https://rickandmortyapi.com/api/character/'

const formatAllChars = charItem => {
    return {
        name: charItem.name,
        id: charItem.id,
        image: charItem.image,
        species: charItem.species
    };
};

// const formatSelectedChar = charItem => {
//     const numEpisodes = charItem.episode.length;
//     return {
//         name: charItem.name,
//         id: charItem.id,
//         image: charItem.image,
//         species: charItem.species,
//         origin: charItem.origin.name,
//         status: charItem.status,
//         episodes: numEpisodes
//     };
// };

const getAllCharsFromApi = () => {
    return fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => data.results.map(formatAllChars));
};

const getSelCharFromApi = (id) => {
    return fetch(ENDPOINT + id)
        .then(response => response.json())
    // .then(data => data.map(formatSelectedChar));
};


export { getAllCharsFromApi, getSelCharFromApi };