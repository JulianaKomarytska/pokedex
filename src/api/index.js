import axios from 'axios';


export const getPokemons = (url, params) => {
    return axios.get(`${url}${typeof params !== 'undefined' ? params : ''}`)
}