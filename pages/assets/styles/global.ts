import styled, { createGlobalStyle } from 'styled-components';
import {Roboto} from '@next/font/google'
const roboto=Roboto({weight:"500",subsets:['latin']})
export const GlobalStyle=createGlobalStyle` 
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color:#FFF7FE;
        font-family: ${roboto.style.fontFamily}
    }
`