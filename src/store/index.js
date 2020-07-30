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
    limitSelect = [20, 30, 50];

    @action addPokemons (toAdd){
        this.pokemons = [...toAdd]
    }

    @action setPrevPage(link){
        this.prevPage = link
    }
    @action setNextPage(link){
        this.nextPage = link
    }

    @action changeLimit = (limit) => {
        this.limit = limit
        console.log('limit', this.limit);
    }

};
export const PokemonStoreContext = createContext(new PokemonsStore());


/**
 * Loading from server
 * @type {React.Context<IObservableValue<boolean>>}
 */
export const Loading = createContext(observable.box(true));



class PokeModal {
    @observable data = null;
    @observable id = null;

    @action setId = ( id ) => {
        console.log('setId');
        this.id = id;
    }

    @action updateData = ( data ) => {
        console.log('updateData');
        this.data = data
    }

    @action clearData = () => {
        console.log('clearData');
        this.data = null;
    }
}

export const PokemonDataStore = createContext(new PokeModal());