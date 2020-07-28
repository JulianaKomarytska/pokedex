import {decorate, observable, extendObservable} from 'mobx';
import {createContext} from 'react';

class PokemonsStore {
   @observable pokemons = [];
    limit =  20;
    offset = 0;
    prevPage = null;

    get nextPage () {
      return `?limit=${this.limit}&offset=${this.offset + this.limit}`
    };

    addPokemons (toAdd){
        console.log('toAdd', toAdd);
        this.pokemons = [...this.pokemons, ...toAdd]
    };

}

export const PokemonStoreContext = createContext(new PokemonsStore());