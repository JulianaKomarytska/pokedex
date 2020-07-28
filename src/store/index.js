import {decorate, observable, extendObservable} from 'mobx';
import {createContext} from 'react';

//
// class Store {
//     pokemons = [];
// }
//
// Store = decorate(Store, {
//     pokemons: observable
// });
//
// export const StoreContext = createContext(new Store());
class PokemonsStore {
    pokemons = [];
    limit =  20;
    offset = 0;
    prevPage = null;

    get nextPage () {
      return `?limit=${this.limit}&offset=${this.offset + this.limit}`
    };

    addPokemons (toAdd){
        this.pokemons = [...this.pokemons, ...toAdd]
    };

}

export const PokemonStoreContext = createContext(new PokemonsStore());