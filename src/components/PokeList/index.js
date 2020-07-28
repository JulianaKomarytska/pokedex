import { getPokemons } from '../../api'
import React , {useContext, useEffect} from 'react';
import {PokemonStoreContext} from '../../store';
import {observer} from 'mobx-react';

import PokeCard from '../PokeCard'

const PokeList =  ( props )  => {
    let store = useContext(PokemonStoreContext);

    console.log('store',store);

    useEffect(()=>{
        (async function(){
            const res = await getPokemons();
            const data = res && res.data;
            store.addPokemons(data.results.map(function(item){
                const index = /\/(\d*)\/.*?$/g.exec(item.url)[1];
                return {
                    name: item.name,
                    url: item.url,
                    index: index
                }
            }));
            store.offset = /offset=(\d*)/g.exec(data.next)[1];
            console.log('store', store.pokemons);
        })();

    });

    const displayData = () => {
        console.log('displayData');
        let renderData = [];
            for( let i = 0, length = store.pokemons.length; i < length; i++){
                const pokemon = store.pokemons[i];
                renderData.push(<PokeCard key={pokemon.name} data={pokemon}/>)
            }
            return renderData.length && renderData || 'Loading... '

    }

    return (
        <React.Fragment>
            {displayData()}

        </React.Fragment>
    )

}

export default observer(PokeList)