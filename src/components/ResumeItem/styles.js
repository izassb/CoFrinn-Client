/* eslint-disable */
import styled from "styled-components";

export const Container = styled.div`
display:flex;
align-items: center;
background-color: #fff;
border-radius: 5px;
padding: 5px 15px;
width: 30%;
margin-top: 1em;

@media (max-width:750px) {
 width:20%;
 p {
    font-size: 12px;
 }
 span{
    font-size: 20px;
 }
 svg{
    display: none;
 }
}
`;

export const Header = styled.header`
display:flex;
padding: 0 1em 0 1em;
align-items:center;
width:100%;
margin: 10px auto;

svg {
    width: 25px;
    height: 25px;
    margin-left: 1.5em;
    margin-top: 5px
}
`;

export const HeaderTitle = styled.p`
font-size: 20px;
margin-top: 20px
`;

export const Total = styled.span`
font-size:30px;
margin-right: 20px;
`;