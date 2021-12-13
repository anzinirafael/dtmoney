import styled from 'styled-components';
import ReactModal from 'react-modal';
export const Container = styled.div`
    background-color: var(--blue);
    padding-top: 2rem;
    padding-bottom: 10rem;
`

export const Content = styled.header`
    max-width: 1128px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    button{
        height: 3rem;
        border: none;
        align-items: center;
        background-color: var(--blue-light);
        border-radius: 0.30rem;
        cursor: pointer;
        color: var(--shape);
        font-size: 1rem;
        padding: 0 2rem;
        font-weight: 600;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.9);
        }
    }
`
export const ModalContainer = styled(ReactModal)`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
`
