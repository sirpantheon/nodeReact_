import styled from 'styled-components'


export const Container = styled.div `
    width:100%;
    height:70px;
    background:#F0F1F5;
    border-bottom:5px solid #40407a;
    display:flex
`

export const leftSide = styled.div `
    width: 50%;
    height:70px;
    display:flex;
    align-items: center;
    padding-left: 10px;

    h1{
        font-size:50px;
        color:#000
    }

`

export const rightSide = styled.div `
    width: 50%;
    height:70px;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    
    a{
        color:#000;
        font-weight: bold;
        text-decoration: none;
        margin:0 20px;
        font-size:23px;

        &:hover{
            color:#83D6DE;
        }
    }

`