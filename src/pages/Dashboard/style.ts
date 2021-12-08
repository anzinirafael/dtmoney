import styled from 'styled-components';

export const Container = styled.main`
    max-width: 1128px;
    margin: 0 auto;
`

export const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    align-self: center;
    padding: 0 1rem;
    margin-top: -5rem;
`


export const HeaderTransactionsTable = styled.div`
    max-width: 1128px;
    margin: 0 auto;
    margin-top: 4rem;
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    color: var(--text);
    align-self: center;
    padding: 0 2rem;
    h1{
        font-size: 1rem;
        font-weight: 400;
    }
`