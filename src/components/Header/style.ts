import styled from 'styled-components';

export const Container = styled.header`
    background-color: var(--blue);
    padding-top: 2rem;
    padding-bottom: 10rem;
`

export const Content = styled.div`
    max-width: 1128px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    button{
        border: none;
        align-items: center;
        background-color: var(--blue-light);
        border-radius: 0.30rem;
        cursor: pointer;
        color: var(--shape);
        font-size: 1rem;
        padding: 0.75rem 2rem;
        font-weight: 600;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.9);
        }
    }
`
