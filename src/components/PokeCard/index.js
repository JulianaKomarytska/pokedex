import React from 'react';
import {Link} from 'react-router-dom'
import './common.scss'


export default function PokeCard ( params ) {
    console.log('params',params)
    return (<Link to={`/pokemon/${params.data.id}`} className='poke-card'>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${params.data.index}.png`}/>
        {params.data.name}
    </Link>)
}