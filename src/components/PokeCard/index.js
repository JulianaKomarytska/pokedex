import React from 'react';
import {observer} from 'mobx-react';
import './common.scss'

const PokeCard = (params) => {
    const {data} = params;
    const {sprites, stats, types, name, base_experience, moves, abilities} = data;

    console.log('data', data);


    const getTypes = () => types.map(type => <div key={type.type.name} className={'type__item'}>{type.type.name}</div>);

    const getMoves = () => moves.map(item => <div key={item.move.name} className={'moves__item'}>{item.move.name}</div>);

    const getAbilities = () => abilities.map(item => <div key={item.ability.name} className={'abilities__item'}>{item.ability.name}</div>)

    const getStats = () => [<div key={'base_experience'} className={'stats__item stat'}>
        <div className={'stat__name'}>base experience</div>
        <div className={'stat__value'}>
            <div className={'stat__value_calc'} style={{'width': `${base_experience}%`}}></div>
            <div className={'stat__value_disp'}>{base_experience}</div>
        </div>
    </div>].concat(stats.map(stat =>
        <div key={stat.stat.name} className={'stats__item stat'}>
            <div className={'stat__name'}>{stat.stat.name}</div>
            <div className={'stat__value'}>
                <div className={'stat__value_calc'} style={{'width': `${stat.base_stat}%`}}/>
                <div className={'stat__value_disp'}>{stat.base_stat}</div>
            </div>
        </div>));


    return (
        <div className={'pokemon'}>
            <div className={'pokemon__name'}>{data.name}</div>
            <div className="pokemon__image image">
                <div className={'image__front'}>
                    <div className={'image__title'}>Front</div>
                    <img className={'image__img'} src={sprites.front_default} alt={`${name} front`}/>
                </div>
                <div className={'image__back'}>
                    <div className={'image__title'}>Back</div>
                    <img className={'image__img'} src={sprites.back_default} alt={`${name} back`}/>
                </div>
            </div>

            <div className="pokemon__type type">
                <div className={'type__title'}>TYPE</div>
                {getTypes()}</div>
            <div className="pokemon__abilities abilities">
                <div className={'abilities__title'}>ABILITIES</div>
                {getAbilities()}
            </div>
            <div className="pokemon__stats stats">
                {getStats()}
            </div>
            <div className="pokemon__moves moves"><div className={'moves__title'}>MOVES</div>{getMoves()}</div>



        </div>
    )
}

export default observer(PokeCard)