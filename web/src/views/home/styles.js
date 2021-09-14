import Styled from 'styled-components'

export const Container = Styled.div`

    width:100%;
 
`
export const FilterArea = Styled.div`
    display:flex;
    width:100%;
    justify-content: space-around;
    margin-top: 20px;

    button{
        width:20%;
        background:none;
        border:none;
    }
 
`

export const Content = Styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:center;


`

export const Title = Styled.div`
    width:100%;
    border-bottom:3px solid #40407a;
    display:flex;
    justify-content:center;
    margin:30px 0;

    h3{
        color:#40407a;
        font-size:25px;
        position:relative;
        top:16px;
        background:#fff;
        padding:0px 20px;
    }
`