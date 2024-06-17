
import styled from "styled-components";




export const Container = styled.div`
width: 100%;
height: 100vh;
background: rgb(2,0,36);
 display:flex;
 justify-content:center;
 align-items: center;
 
`;

export const Box = styled.div`
width: 50vh;
height: 80vh;
display: grid;
justify-content: space-around;
align-items: center;

background: linear-gradient(90deg, rgba(2,0,36) 0%, rgba(0,0,0,1) 34%, rgba(2,0,36) 100%);;
border-radius: 20px;
`;

export const Image = styled.img`
width: 200px;
border-radius: 50px;
margin-top: 30px;

`;



export const Input = styled.input`
width: 185px;
font-weight: bold;
height: 30px;
font-size: 15px;
border-radius: 5px;
border: none;
background-color: white;
outline: none;
padding: 5px;


`;


export const Button = styled.button`

width: 185px;
height: 30px;
font-size: 25px;
font-weight: bolder;
border: none;
cursor: pointer;
border-radius: 5px;

&:hover {
    background-color:yellow;
    border: solid 1px white;
  }


transition: 1s;


`





