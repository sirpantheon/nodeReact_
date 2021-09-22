import React, { useEffect } from "react";
import { useState } from "react";
import * as S from './styles'


//components

import Header from '../../components/header'
import Footer from '../../components/footer'

const state = useState

function usuario(){

    const [mac,setmac] = state();
    
    async function saveMac(){
        await localStorage.setItem('@CC/macaddress',mac)
    }

    return (
        <S.Container>
            <Header/>
            
            <S.Content>
                <h1>Digite o Nome Do Usuario</h1>
                <input type="text" placeholder="Nome do Usuario" name="macaddress" onChange={e => setmac(e.target.value)} />
                <button type="button" onClick={saveMac}>Sicronizar</button>
            </S.Content>

            <Footer />
        </S.Container>

        )

}

export default usuario