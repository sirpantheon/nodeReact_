import Styled from 'styled-components'

export const Container = Styled.div`

    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;

 
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
export const Form = Styled.div`
    width:80%;
    display:flex;
    justify-content:center;

`
export const typeIcons = Styled.div`

    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;

    .inative{
            opacity:0.5;
            width:60px;
            height:60px;
            button{
                box-shadow: 0 2px 4px 1px #40407a;
            }
    }

    button{
        display:flex;
        width:70px; 
        height:70px;
        align-items: center;
        justify-content:center;
        background:none;
        border-radius:50%;
        box-shadow: 10px 10px 12px 0 #40407a;
        margin:0 45px;
    }

    img{
       
        width:70px; 
        height:70px;
        cursor:pointer;
        
        
        
        &:hover{
            opacity:0.8;

        }
    }


`