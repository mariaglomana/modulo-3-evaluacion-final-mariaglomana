const ENDPOINT = 'https://rickandmortyapi.com/api/character/'

const formatCharItem = charItem => {
    const numEpisodes = charItem.episode.length;
    return {
        name: charItem.name,
        id: charItem.id,
        image: charItem.image,
        species: charItem.species,
        origin: charItem.origin.name,
        status: charItem.status,
        episodes: numEpisodes
    };
};

const getDataFromApi = () => {
    return fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => data.results.map(formatCharItem));
};

export default getDataFromApi;