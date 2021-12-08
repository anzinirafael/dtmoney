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