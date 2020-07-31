import React, {useContext, useEffect, useRef} from "react";
import {observer} from 'mobx-react';
import {FilterStore, PokemonDataStore} from "../../store";
import './common.scss'
import {getPokemonData} from '../../api'
import axios from "axios";

const Search = () => {

    const store = useContext(FilterStore);
    const resultStore = useContext(PokemonDataStore);
    const input = useRef(null);
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const changeFilter = () => {
        store.change(input.current.value);
        resultStore.clearError();
    };

    const searchOnServer = () => {
        getPokemonData({id:input.current.value}, source.token).then(res => {
            store.clear();
            resultStore.updateData(res.data);
            }, (error) => {
                resultStore.setError(error.response.data);
                console.log('headers', error.response.headers);
            }
        );
    };

    const handleKeyPress = ( e ) => {
        console.log('handleKeyPress');
        resultStore.clearData();
        resultStore.clearError();
        if (e.key === 'Enter'){
            searchOnServer()
        }
    };

    useEffect(()=>{
        return function clear () {
            source && source.cancel()
        }
    });

    return (
        <div className={'pokedex__wrapper'}>
        <input className={'poledex__input'}
               placeholder={'What pokemon are we looking for?'}
               value={store.filter}
               ref={input}
               onChange={changeFilter}
               onKeyPress={handleKeyPress}
        />
            <button onClick={searchOnServer} className={'poledex__submit'}/>
        </div>
    )
};

export default observer(Search)

