import React from 'react'
import * as S from './style'

function Header(){
    return (
        <S.Container>

            <S.leftSide>
                <h1>Controle Do Centro Cirurgico</h1>
            </S.leftSide>

            <S.rightSide>
                <a href="#">Inicio</a>
                <a href="#">Registrar Chave</a>
                <a href="#">Registrar Puerpera</a>
                <a href="#">Sicronizar</a>
            </S.rightSide>

        </S.Container>
    )
}

export default Header;