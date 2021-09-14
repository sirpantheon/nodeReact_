import React from 'react';
import {format} from 'date-fns'

import * as S from './style'
import iconMask from '../../assets/acompanhante.png'

function taskCard({type,nome,registro,especialidade,entrega}){

    const date = format(new Date(entrega), 'dd/MM/yyyy')
    const hour = format(new Date(entrega), 'HH:mm')

    return (
        <S.Container>
            <S.TopCard>
                <img src={iconMask} alt="icone" />
                <h3>{nome}</h3>
                <h3>{registro}</h3>
                <h3>{especialidade}</h3>
            </S.TopCard>
            <S.BottomCard>
                <strong>{date}</strong>
                <span>{hour}</span>
            </S.BottomCard>

        </S.Container>
    )
}

export default taskCard;