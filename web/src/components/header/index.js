import React from 'react'
import * as S from './style'

import { Link } from 'react-router-dom'

function Header({lateCount}){
    return (
        <S.Container>

            <S.leftSide>
                <h1>Controle Do Centro Cirurgico</h1>
            </S.leftSide>

            <S.rightSide>
                <Link to="/">Inicio</Link>
                <Link to="/task">Registrar Chave</Link>
                <Link>Registrar Puérpera</Link>
                <Link to="/usuario">Usuario</Link>

            </S.rightSide>

        </S.Container>
    )
}

export default Header;