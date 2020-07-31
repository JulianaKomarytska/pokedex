import React, {useContext, useRef} from 'react';
import {observer} from "mobx-react";
import PokeListItem from "../PokeListItem";
import PokeCard from "../PokeCard";
import Search from "../Search";

import {FilterStore, PokemonDataStore} from '../../store'

import './common.scss'



const SearchScreen = ( params ) => {

    const store = useContext(FilterStore);
    const pokemonRes = useContext(PokemonDataStore);
    const responsePlace = useRef(null);

    const displayResult = () => {
        if (pokemonRes.data || pokemonRes.error){
            let res;
            pokemonRes.data && (res = <PokeCard data={pokemonRes.data}/>);
            pokemonRes.error && (res = <div className={'search__error'}>
                    <div>Can not find</div>
                    <div>{store.filter.toUpperCase()}</div>
                    <div>Please, try again</div>
            </div>
            );
            return res
        } else
        if (store.filteredList.length) {
            return store.filteredList.map( item => <PokeListItem key={item.name} data={item} />)
        } else
        if (store.filter) {
            return store.filter && `Search ${store.filter.toUpperCase()}`
        } else return ''
    };

    console.log('return', pokemonRes.data);
    return (
        <div className={'search'}>
            <Search/>
            <div className="search__list" ref={responsePlace}>
                {displayResult()}
            </div>
        </div>
    )
};

export default observer(SearchScreen)