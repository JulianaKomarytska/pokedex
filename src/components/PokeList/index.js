import { getPokemons } from '../../api'
import React , {useContext, useEffect} from 'react';
import {PokemonStoreContext} from '../../store';
import {observer} from 'mobx-react';
import './common.scss'

import PokeCard from '../PokeCard'

const PokeList =  ( props )  => {
    let store = useContext(PokemonStoreContext);


    const getPokemonsList =  async () => {
        console.log('useEffect');
        const res = await getPokemons(),
            data = res.data;
        console.log('data', data);
        store.addPokemons(data.results.map(function(item){
            console.log('item.url', item.url);
            const index = /.*\/(\d*)\/.*?$/g.exec(item.url)[1];
            console.log('index', index);
            return {
                name: item.name,
                url: item.url,
                index: index
            }
        }));
        store.offset = /offset=(\d*)/g.exec(data.next)[1];
        console.log('store', store.pokemons);
    }

    useEffect(()=>{
        !store.pokemons.length && getPokemonsList()
    });

    return (
        <div className='poke-list'>
            {store.pokemons.length? store.pokemons.map( pokemon => (<PokeCard key={pokemon.name} data={pokemon}/>)) : 'Loading...'}
        </div>
    )

}

export default observer(PokeList)