import axios from 'axios';

export const getPokemons = (params) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon${typeof params !== 'undefined' ? params : ''}`)
}