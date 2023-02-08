import styled from "styled-components";

export const MaiNav=styled.nav`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: #ffffff;
    height: 100px;
`;
export const MaiLiv=styled.li<{active:boolean}>`
 list-style-type: none;
 padding: 10px 20px;
 margin-right:10px ;
 position: relative;
 z-index:4;
 transition: 0.6s;
 a{
    text-decoration: none;
    color: ${props=>props.active?"white":"#565656"};;
    font-weight: bold;
    font-size: 1.2em;
    z-index:4;
    letter-spacing:1px;
    padding: 10px;
 }
 :hover::after{
    transform:${props=>!props.active&&"skew(-20deg) scale(1)"};
    height: 100%;
 }
 :hover a{
    color: white;
 }
 ::after{
    content: "";
    width: 100%;
    height: ${props=>props.active?"100%":"0" };
    position: absolute;
    left:0;
    bottom: 0;
    border: none;
    background:#7B01BD;
    transform-origin:center;
    transform:${props=>props.active?" skew(-20deg) scale(1)":"skew(-20deg) scale(0)" };
    border-radius:5px;
    z-index: -1;
    transition: 0.6s cubic-bezier(.89,.89,0,.99);
 }
`