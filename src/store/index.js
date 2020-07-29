import {action, observable} from 'mobx';
import {createContext} from 'react';

/**
 * Pokemone list store
 */
class PokemonsStore {
    @observable pokemons = [];
    @observable limit = 20;
    prevPage = null;
    nextPage = null;
    url = 'https://pokeapi.co/api/v2/pokemon';

    @action addPokemons (toAdd){
        this.pokemons = [...toAdd]
    }

    @action setPrevPage(link){
        this.prevPage = link
    }
    @action setNextPage(link){
        this.nextPage = link
    }

};
export const PokemonStoreContext = createContext(new PokemonsStore());


/**
 * Loading from server
 * @type {React.Context<IObservableValue<boolean>>}
 */
export const Loading = createContext(observable.box(true));


