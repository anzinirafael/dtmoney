import styled from 'styled-components';

export const Container = styled.div`
    margin: 7% 35%;
    background-color: var(--shape);
    padding: 4rem 3rem;
    width: 30%;
    h1{
        font-size: 1.5rem;
        font-family: 'Poppins', 'sans-serif';
        font-weight: 600;
        margin-bottom: 2rem;
    }
    input{
        width: 100%;
        padding: 1.25rem 1.50rem;
        border-radius: 0.25rem;
        margin-bottom: 1rem;
        background-color: var(--background);
        font-size: 16px;
        line-height: 1.5rem;
        border: solid 1px #d7d7d7;
    }
    .buttons{
        display: flex;
        flex-direction: row;
        margin-bottom: 1rem;
        .income, .outcome{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 1.5rem 0;
            width: 49%;
            margin-right: 2%;
            border: solid 1px #d7d7d7;
            background-color: var(--background);
            transition: filter 0.2s;
            img{
                margin-right: 1.5rem;
                font-size: 1.5rem;
            }
            p{
                color: var(--title);
                font-size: 1rem;
                line-height: 1.5rem;
            }
            &.outcome{
                margin-right: 0;
            }
            &:hover{
                filter: brightness(0.9);
            }
        }
    }
    button{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.25rem 0;
            width: 100%;
            background-color: var(--green);
            border-radius: 0.25rem;
            border: none;
            color: var(--shape);
            font-size: 1rem;
            line-height: 1.5rem;
            margin-top: 0.25rem;
            transition: filter 0.2s;
            &:hover{
                filter: brightness(0.9);
            }
        }

`