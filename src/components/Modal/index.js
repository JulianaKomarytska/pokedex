import React, {useContext, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import { runInAction } from 'mobx'
import {PokemonDataStore, Loading} from "../../store";
import {getPokemonData} from '../../api';
import PokeCard from '../PokeCard'
import axios from 'axios'


const Modal = (params) => {
    const {id} = params.match.params;
    const store = useContext(PokemonDataStore);
    const load = useContext(Loading);
    store.setId(id);

    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        (async () => {
                const data = await getPokemonData({id: id}, source.token).then(res => res.data);
                store.updateData(data);
                runInAction(() => load.set(false));
            }
        )();

        return function clear() {
            console.log('return function clear');
            source && source.cancel();
            store.clearData();
        }
    }, [store.id, id, store]);

    if(load.get()){
        return "Loading"
    }

    return (
        <div>
            {store.data &&  ReactDOM.createPortal(<PokeCard
                data={store.data}/>, document.getElementById('portal')) }
        </div>
    )

};
export default observer(Modal);