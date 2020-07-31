import React, {useContext, useRef} from 'react'
import { observer } from 'mobx-react';
import {PokemonStoreContext} from '../../store';

const LimitSelect = (data) => {

    const store = useContext(PokemonStoreContext);
    const limitSelections = store.limitSelect;
    const l = useRef(null);

    const limit = store.limit
    const changeLimit = () => {
        store.changeLimit(l.current.value)
    }
    return (
        <select onChange={changeLimit} value={limit} ref={l}>
            {limitSelections.map(limit => <option value={limit} key={limit}>{limit}</option>)}
        </select>
    )
};

export default observer(LimitSelect)