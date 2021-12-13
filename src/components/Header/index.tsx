import React from 'react';
import logo from "./../../assets/logo.svg";
import {
    Container,
    Content
} from './style';

export function Header(){
    return(
        <Container>
            <Content> 
                <img src={logo}/>
                <button>
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}