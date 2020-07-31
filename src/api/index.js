import axios from 'axios';

export const getPokemons = (url, cancel, params) => {
    return axios.get(`${url}${typeof params !== 'undefined' ? params : ''}`)
}

export const getPokemonData = async (params, cancel) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`,{
        cancelToken: cancel
    })
};