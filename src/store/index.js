import {action, computed, observable} from 'mobx';
import {createContext} from 'react';

/**
 * Pokemone list store
 */
class Pokemons {
    @observable pokemons = [];
    @observable limit = 20;
    prevPage = null;
    nextPage = null;
    baseUrl = 'https://pokeapi.co/api/v2/pokemon';
    limitSelect = [20, 30, 50];

    @computed get url () {
        if (!this.nextPage) {
            return 'https://pokeapi.co/api/v2/pokemon';
        } else {
            return `${this.baseUrl}/?limit=${this.limit}`
        }
    }

    @action addPokemons (toAdd){
        this.pokemons = [...toAdd]
        AllPokemonsStore.addPokemons(toAdd)
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

}

const PokemonsStore = new Pokemons()
export const PokemonStoreContext = createContext(PokemonsStore);


class AllPokemons {
    @observable list = new Map();
    @action addPokemons = ( data ) => {
        data.forEach( elem => {
            return this.list.set(elem.name, elem)
        })

    }
}

const AllPokemonsStore = new AllPokemons();

/**
 * Loading from server
 * @type {React.Context<boolean>}
 */
export const Loading = createContext(observable.box(true));


class Filter {
    @observable filter = ''

    @computed get filteredList () {
        let arr = []
        for ( let [key, value] of AllPokemonsStore.list){
            key.includes(this.filter) && (arr.push(value))
        }
        return arr
    }

    @action change ( data ) {
        this.filter = data
    }

    @action clear () {
        this.filter = ''
    }

}

export const FilterStore = createContext(new Filter());


class PokeModal {
    @observable data = null;
    @observable error = null;
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

    @action setError = ( data ) => {
        this.error = data
    }

    @action clearError = () => {
        this.error = null;
    }
}

export const PokemonDataStore = createContext(new PokeModal());