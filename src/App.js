import React from 'react';
import './App.css';
import {observer} from 'mobx-react';
import PokeList from './components/PokeList';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {PokemonStoreContext} from './store'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exect path={'/'} component={PokeList}/>
                <Route path={'/pokemon/:id'} component={PokeList}/>
            </Switch>
        </BrowserRouter>
    );
}

export default observer(App);
