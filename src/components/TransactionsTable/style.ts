import styled, {css} from 'styled-components';

interface Props{
    type: 'up' | 'down';
}

export const Container = styled.section<Props>`
    max-width: 1128px;
    margin: 0 auto;
    margin-bottom: 0.50rem;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;

    align-self: center;
    background: var(--shape);
    padding: 1.25rem 2rem;
    strong{
        font-size: 1rem;
        font-weight: 400;
        &.title{
        color: var(--title);
        }
        &.price{
            ${({type}) => type === 'up' ? css`color: var(--green)` : css`color: var(--red)`};
        }
        &.category, &.date{
            color: var(--text);
        }
    }

`