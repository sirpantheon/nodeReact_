import React, {useState , useEffect } from 'react'

import * as S from './styles'

//components

import Header from '../../components/header'
import Footer from '../../components/footer'

function usuario(){

    return (
        <S.Container>
            <Header />
            <h1>Digite o Nome Do Usuario</h1>

            <Footer />
        </S.Container>

        )

}

export default usuario