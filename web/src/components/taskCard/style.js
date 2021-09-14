import styled from 'styled-components'

export const Container = styled.div `
    width:20%;
    height:220px;
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    
    background: linear-gradient(215deg, #F0F1F5 40%, #dfe6e9 83%);
    box-shadow:  0px 0px 15px 5px #b4b7bc;
    border-top-left-radius: 20px;
    cursor:pointer;
    margin:30px;
    transition:all 0.3s ease;
    
    &:hover{
        opacity:0.7
    }


`
export const BottomCard = styled.div`
    width:100%;
    display:flex;  
    justify-content: space-around;
    font-size:20px;

    strong{
        font-weight:bold;
        color:#40407a;
    }

`
export const TopCard = styled.div`
    display:flex;   
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img{
        margin-bottom:20px;
    }
    
`