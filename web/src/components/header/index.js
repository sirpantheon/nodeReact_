import React from 'react'
import * as S from './style'
import icone from '../../assets/masculino.png'

function Header({lateCount}){
    return (
        <S.Container>

            <S.leftSide>
                <h1>Controle Do Centro Cirurgico</h1>
            </S.leftSide>

            <S.rightSide>
                <a href="#">Inicio</a>
                <a href="#">Registrar Chave</a>
                <a href="#">Registrar Puérpera</a>
                <a href="#">Sicronizar</a>
                <a href="#">
                    <img src="icone" alt=""/>
                    <span>{lateCount}</span>                
                </a>
            </S.rightSide>

        </S.Container>
    )
}

export default Header;