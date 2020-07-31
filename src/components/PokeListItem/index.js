import React from 'react';
import {Link} from 'react-router-dom'
import './common.scss'


export default function PokeListItem ( params ) {
    const {index, name} = params.data;

    return (
        <Link to={`/pokemon/${index}`} className='poke-card'>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`} alt={name}/>
            <div>{name}</div>
        </Link>
    )
}