import React from 'react';
import { CardsTransactions } from '../../components/CardsTransactions';
import { Header } from '../../components/Header';
import { Container, Cards } from './style';

export function Dashboard(){
    return(
        <Container>
            <Cards>
                <CardsTransactions title="Entradas" values="R$ 17.400,00" icon="income" type="others"/>
                <CardsTransactions title="Saidas" values="R$ 1.259,00" icon="outcome"  type="others"/>
                <CardsTransactions title="Total" values="R$ 16.141,00" icon="total"  type="total"/>
            </Cards>
        </Container>
    )
}