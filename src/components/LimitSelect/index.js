import React, {useContext} from 'react'
import { observer } from 'mobx-react';
import {PokemonStoreContext} from '../../store';


const LimitSelect = (data) => {

    const store = useContext(PokemonStoreContext);
    const limitSelections = store.limitSelect;

    let l = React.createRef()
    const changeLimit = () => {
        store.changeLimit(l.value)
    }
    return (
        <select onChange={changeLimit} ref={l}>
            ${limitSelections.map(limit => <option defaultValue={limit=== store.limit} value={limit} key={limit}>{limit}</option>)}
        </select>
    )
};

export default observer(LimitSelect)