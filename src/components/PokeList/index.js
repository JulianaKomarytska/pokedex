import { getPokemons } from '../../api'
import React, {useContext, useEffect, Fragment} from 'react';
import {Loading, PokemonStoreContext} from '../../store';
import {observer} from 'mobx-react';
import {configure, runInAction} from 'mobx';
import './common.scss'

import PokeCard from '../PokeCard'
import PaginationBtn from '../PaginationBtn'

configure({enforceActions: 'observed'});

const PokeList =  ( props )  => {
    let store = useContext(PokemonStoreContext);
    let loading = useContext(Loading);

    const getPokemonsList = async (url) => {
        const res = await getPokemons(url),
            data = res.data;
        store.setPrevPage(data.previous);
        store.setNextPage(data.next);
        runInAction(() => loading.set(false));

        store.addPokemons(data.results.map(function(item){
            const index = /.*\/(\d*)\/.*?$/g.exec(item.url)[1];
            return {
                name: item.name,
                url: item.url,
                index: index
            }
        }));

    };

    useEffect(()=>{
        !store.nextPage && getPokemonsList(store.url);
        console.log('store', store);
    });

    return (
        <>
        <div className='poke-list'>
                {loading.get() && 'Loading...'}
                {store.pokemons.length ? store.pokemons.slice().map(pokemon => (
                    <PokeCard key={pokemon.name} data={pokemon}/>)) : ''}
        </div>
            {store.nextPage && <PaginationBtn data={{
                link: store.nextPage,
                className: 'nextPage',
                text: 'next',
                actions: getPokemonsList
            }}/>}
            {store.prevPage && <PaginationBtn data={{
                link: store.prevPage,
                className: 'prevPage',
                text: 'previous',
                actions: getPokemonsList
            }}/>}
        </>
    )

}

export default observer(PokeList)